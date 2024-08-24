import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import type { CommonSheetProps } from "@/types/common";

const TagSheet = ({ isOpen, onInteractOutside }: CommonSheetProps) => {
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-4"
        onInteractOutside={() => {
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center pt-[14px] pb-[16px] ">
          <SheetTitle>
            <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
          </SheetTitle>
        </SheetHeader>
        <div className="px-5">
          <h2 className="text-semibold-20">태그를 입력해주세요</h2>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TagSheet;
