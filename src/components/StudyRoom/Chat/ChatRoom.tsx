import Image from "next/image";

import { useEffect, useState } from "react";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { default as CustomImage } from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import { getAllMessages, sendMessage } from "@/components/StudyRoom/Chat/chatAction";
import Message from "@/components/StudyRoom/Chat/Message";

import { QUERY_KEYS } from "@/constants/queryKey";

import { createClient } from "@/utils/supabase/client";

import type { CommonSheetProps } from "@/types/common";

interface ChatRoomProps extends CommonSheetProps {
  studyRoomId: string;
}

const ChatRoom = ({ isOpen, onInteractOutside, studyRoomId }: ChatRoomProps) => {
  const queryClient = useQueryClient();

  const supabase = createClient();

  const [message, setMessage] = useState("message test12312312");

  const getAllMessagesQuery = useQuery({
    queryKey: ["messages", studyRoomId],
    queryFn: () => getAllMessages(studyRoomId),
  });

  const sendMessageMutation = useMutation({
    mutationFn: async () => {
      return sendMessage({
        message,
        chatUserId: "1003d1f0-6ed0-4bbf-937f-945537d387e5",
        studyRoomId,
      });
    },
    onSuccess: () => {
      setMessage("");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MESSAGES, studyRoomId] });
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
        <SheetHeader className="h-10 flex justify-center px-3">
          <CustomImage
            src="/svg/ic-header-left-arrow.svg"
            alt="leftButtonIcon"
            className="w-[24px] h-[24px]"
            handleClick={onInteractOutside}
          />
        </SheetHeader>

        <div className="flex flex-col flex-1 overflow-y-scroll p-2 bg-muted">
          {getAllMessagesQuery.data &&
            getAllMessagesQuery.data.map((message) => (
              <Message key={message.id} message={message.message} isMine={false} />
            ))}
          {/* <div ref={scrollRef}></div> */}
        </div>

        <div className="w-[375px] fixed bottom-2">
          <div className="flex items-center gap-3 px-3">
            <input
              type="text"
              placeholder="메세지 보내기"
              className="w-[300px] rounded-lg border border-[#E9E9E9] bg-[#f3f3f3] p-3.5 py-3 text-sm placeholder-gray-purple focus:outline-none"
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
