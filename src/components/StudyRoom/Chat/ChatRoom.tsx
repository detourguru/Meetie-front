import Image from "next/image";

import { default as CustomImage } from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";

import type { CommonSheetProps } from "@/types/common";

const ChatRoom = ({ isOpen, onInteractOutside }: CommonSheetProps) => {
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
