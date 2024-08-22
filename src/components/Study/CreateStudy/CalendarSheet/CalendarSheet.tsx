import Calendar from "@/components/common/Calendar/Calendar";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import type { CommonSheetProps } from "@/types/common";

const CalendarSheet = ({ isOpen, onInteractOutside }: CommonSheetProps) => {
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8"
        onInteractOutside={() => {
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center pt-[14px] pb-[32px] ">
          <SheetTitle>
            <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
          </SheetTitle>
        </SheetHeader>

        <Calendar />
      </SheetContent>
    </Sheet>
  );
};

export default CalendarSheet;
