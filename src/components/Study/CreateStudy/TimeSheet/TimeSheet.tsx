import { useState } from "react";

import TimePicker from "./TimePicker/TimePicker";

import Button from "@/components/common/Button/Button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import { NOON_LIST, HOUR_LIST, MINUTE_LIST } from "@/constants/common";

import type { CommonSheetProps } from "@/types/common";
import type { CreateStudyUpdateHandlerType } from "@/types/study";

interface TimeSheetProps extends CommonSheetProps {
  updateInputValue: CreateStudyUpdateHandlerType;
}

const TimeSheet = ({ isOpen, onInteractOutside, updateInputValue }: TimeSheetProps) => {
  const [selectTime, setSelectTime] = useState({ noon: "오전", hour: "00", minute: "00" });

  const handleChangeTime = (target: string, value: string) => {
    setSelectTime({ ...selectTime, [target]: value });
  };

  const handleTimeSelect = () => {
    updateInputValue("time", selectTime);
    onInteractOutside && onInteractOutside();
  };

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

        <div>
          <h2 className="px-5 pb-[10px] text-semibold-20">시간을 선택해 주세요</h2>
          <div className="flex bg-[#f7f7fb] text-regular-28 gap-[80px] justify-center">
            <div className="flex">
              <TimePicker list={NOON_LIST} valueKey="noon" handleChangeTime={handleChangeTime} />
            </div>

            <div className="flex relative gap-[60px]">
              <TimePicker list={HOUR_LIST} valueKey="hour" handleChangeTime={handleChangeTime} />
              <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-55%]">:</p>
              <TimePicker
                list={MINUTE_LIST}
                valueKey="minute"
                handleChangeTime={handleChangeTime}
              />
            </div>
          </div>
          <div className="px-5 flex gap-4 pt-[18px]">
            <Button variant="outline" onClick={onInteractOutside}>
              <p className="text-bold-16 text-[#adb5bd]">취소</p>
            </Button>
            <Button onClick={handleTimeSelect}>
              <p className="text-bold-16 text-white">완료</p>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TimeSheet;
