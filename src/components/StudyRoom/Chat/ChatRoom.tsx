import Image from "next/image";

import { useEffect, useState, useRef } from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { default as CustomImage } from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import { getAllMessages, sendMessage } from "@/components/StudyRoom/Chat/chatAction";
import Message from "@/components/StudyRoom/Chat/Message";

import { QUERY_KEYS } from "@/constants/queryKey";

import { convertSimpleDateTime } from "@/utils/date";
import { createClient } from "@/utils/supabase/client";

import type { CommonSheetProps } from "@/types/common";

interface ChatRoomProps extends CommonSheetProps {
  studyRoomId: string;
  userId: string;
}

const ChatRoom = ({ isOpen, onInteractOutside, studyRoomId, userId }: ChatRoomProps) => {
  const queryClient = useQueryClient();

  const scrollRef = useRef<HTMLDivElement>(null);

  const supabase = createClient();

  const [message, setMessage] = useState("");

  const getAllMessagesQuery = useQuery({
    queryKey: ["messages", studyRoomId],
    queryFn: () => getAllMessages(studyRoomId),
  });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [getAllMessagesQuery]);

  const sendMessageMutation = useMutation({
    mutationFn: async () => {
      return sendMessage({
        message,
        chatUserId: userId,
        studyRoomId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MESSAGES, studyRoomId] });
      setMessage("");
    },
  });

  useEffect(() => {
    const channel = supabase
      .channel(`chat${studyRoomId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "message",
        },
        () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MESSAGES, studyRoomId] });
        },
      )
      .subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <Sheet open={isOpen}>
      <SheetContent className="pb-8 h-full overflow-scroll hidden-scrollbar w-[375px]">
        <SheetHeader className="h-10 flex justify-center px-3 fixed bg-white w-[375px]">
          <CustomImage
            src="/svg/ic-header-left-arrow.svg"
            alt="leftButtonIcon"
            className="w-[24px] h-[24px]"
            handleClick={onInteractOutside}
          />
        </SheetHeader>

        <div className="flex flex-col gap-3 flex-1 overflow-y-scroll px-2 py-12">
          {getAllMessagesQuery.data &&
            getAllMessagesQuery.data.map((messageData) => (
              <Message
                key={messageData.id}
                message={messageData.message}
                userId={messageData.sender}
                isMine={messageData.sender === userId}
                messageSendTime={convertSimpleDateTime(new Date(messageData.created_at), "time")}
              />
            ))}
          <div ref={scrollRef} />
        </div>

        <div className="w-[375px] fixed py-2 bottom-0 bg-white">
          <div className="flex items-center gap-3 px-3">
            <input
              type="text"
              value={message}
              placeholder="메세지 보내기"
              className="w-[300px] rounded-lg border border-[#E9E9E9] bg-[#f3f3f3] p-3.5 py-3 text-sm placeholder-gray-purple focus:outline-none"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="button"
              className="w-[50px] h-[50px] bg-primary-400 rounded-2xl flex items-center justify-center"
              onClick={() => sendMessageMutation.mutate()}
            >
              <Image src="/svg/ic-send.svg" alt="sendIcon" width={24} height={24} />
              {/* {sendMessageMutation.isPending ? <LoaderIcon /> : <SendIcon />} */}
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatRoom;
