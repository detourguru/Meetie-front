import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import { WEEK_DAY } from "@/constants/common";

import type { CommonSheetProps } from "@/types/common";
import type { CreateStudyUpdateHandlerType, CreateStudyFormRequestType } from "@/types/study";

interface WeekSheetProps extends CommonSheetProps {
  createStudyForm: CreateStudyFormRequestType;
  updateInputValue: CreateStudyUpdateHandlerType;
}

const WeekSheet = ({
  isOpen,
  onInteractOutside,
  createStudyForm,
  updateInputValue,
}: WeekSheetProps) => {
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

        <ul className="flex px-5 justify-between">
          {WEEK_DAY.map((week) => (
            <li
              className="flex items-center"
              onClick={() => {
                updateInputValue("week", week);
                onInteractOutside && onInteractOutside();
              }}
            >
              <label className="flex flex-col items-center gap-5 w-full h-full py-[18px]">
                <input
                  type="checkbox"
                  className="appearance-none w-6 h-6 border border-[#e5e5ec] rounded checked:border-[#0176f9] checked:bg-[#0176f9] checked:bg-[url('/svg/ic-week-check.svg')] checked:bg-no-repeat checked:bg-center"
                  checked={week === createStudyForm.week}
                />
                <p>{week}</p>
              </label>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default WeekSheet;
