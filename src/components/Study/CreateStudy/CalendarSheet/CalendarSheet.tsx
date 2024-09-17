import Calendar from "@/components/common/Calendar/Calendar";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import type { CommonSheetProps } from "@/types/common";
import type { CreateStudyUpdateHandlerType } from "@/types/study";
import type { CreateTaskUpdateHandlerType, CreateScheduleUpdateHandlerType } from "@/types/task";

interface CalendarSheetProps extends CommonSheetProps {
  updateInputValue?: CreateStudyUpdateHandlerType;
  updateTaskInputValue?: CreateTaskUpdateHandlerType;
  updateScheduleInputValue?: CreateScheduleUpdateHandlerType;
  isEndDate?: boolean;
}

const CalendarSheet = ({
  isOpen,
  onInteractOutside,
  updateInputValue,
  updateTaskInputValue,
  updateScheduleInputValue,
  isEndDate,
}: CalendarSheetProps) => {
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

        <Calendar
          updateTaskInputValue={updateTaskInputValue}
          updateInputValue={updateInputValue}
          updateScheduleInputValue={updateScheduleInputValue}
          onInteractOutside={onInteractOutside}
          isEndDate={isEndDate}
        />
      </SheetContent>
    </Sheet>
  );
};

export default CalendarSheet;
