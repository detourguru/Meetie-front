import Image from "next/image";

import { default as CustomImage } from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import Message from "@/components/StudyRoom/Chat/Message";

import { useChatRoom } from "@/hooks/study-room/useChatRoom";

import { convertSimpleDateTime } from "@/utils/date";

import type { CommonSheetProps } from "@/types/common";

interface ChatRoomProps extends CommonSheetProps {
  studyRoomId: string;
  userId: string;
}

const ChatRoom = ({ isOpen, onInteractOutside, studyRoomId, userId }: ChatRoomProps) => {
  const { message, allMessageData, scrollRef, handleChangeMessage, handleSendMessage } =
    useChatRoom({ studyRoomId });

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
          {allMessageData.data &&
            allMessageData.data.map((messageData) => (
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
              onChange={(e) => handleChangeMessage(e.target.value)}
            />
            <button
              type="button"
              className="w-[50px] h-[50px] bg-primary-400 rounded-2xl flex items-center justify-center"
              onClick={handleSendMessage}
            >
              <Image src="/svg/ic-send.svg" alt="sendIcon" width={24} height={24} />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ChatRoom;
