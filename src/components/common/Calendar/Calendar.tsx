import Image from "next/image";

import { useCallback } from "react";

import { format, isSameMonth, isSunday, isSaturday, isToday } from "date-fns";

import { WEEK_DAY } from "@/constants/common";

import { useCalendar } from "@/hooks/common/useCalendar";
import { useToast } from "@/hooks/common/useToast";

import { startDateValidation, endDateValidation } from "@/utils/date";

import type { CreateStudyUpdateHandlerType } from "@/types/study";
import type { CreateScheduleUpdateHandlerType, CreateTaskUpdateHandlerType } from "@/types/task";

interface CalendarProps {
  updateInputValue?: CreateStudyUpdateHandlerType;
  updateTaskInputValue?: CreateTaskUpdateHandlerType;
  updateScheduleInputValue?: CreateScheduleUpdateHandlerType;
  onInteractOutside?: () => void;
  isEndDate?: boolean;
  startDate?: Date | null;
}

const Calender = ({
  updateInputValue,
  updateTaskInputValue,
  updateScheduleInputValue,
  onInteractOutside,
  isEndDate,
  startDate,
}: CalendarProps) => {
  const { currentMonth, dayList, monthStart, today, handlePrevMonth, handleNextMonth } =
    useCalendar();

  const toast = useToast();

  const handleDayText = useCallback(() => {
    return dayList.map((dayData) => (
      <div
        key={dayData.toString()}
        className="flex justify-center items-center w-[44px] h-[44px]"
        onClick={() => {
          updateInputValue &&
            (isEndDate
              ? endDateValidation(dayData, today, startDate)
                ? updateInputValue("endDate", dayData)
                : toast.toast({
                    title: "종료일은 시작일 이후 날짜만 가능합니다",
                  })
              : startDateValidation(dayData, today)
                ? updateInputValue("startDate", dayData)
                : toast.toast({
                    title: "시작일은 오늘 이후 날짜만 가능합니다",
                  }));

          updateTaskInputValue && updateTaskInputValue("endDate", dayData);

          updateScheduleInputValue && updateScheduleInputValue("scheduleDate", dayData);

          onInteractOutside && onInteractOutside();
        }}
      >
        <p
          className={`${isSameMonth(monthStart, dayData) ? (isSunday(dayData) ? "text-[#ff0000]" : isSaturday(dayData) ? "text-[#0000ff]" : "text-black") : "text-[#999999]"} ${isToday(dayData) && "rounded-full bg-[#0176f9] text-white"} flex justify-center items-center w-[30px] h-[30px] text-semibold-16`}
        >
          {format(dayData, "d")}
        </p>
      </div>
    ));
  }, [currentMonth]);

  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <Image
          src="/svg/ic-calendar-left-arrow.svg"
          alt="leftArrowIcon"
          width={30}
          height={30}
          onClick={handlePrevMonth}
        />
        <div className="flex items-center justify-center gap-4 ">
          <p className="text-bold-18">{format(currentMonth, "yyyy")}년</p>
          <p className="text-bold-18">{format(currentMonth, "M")}월</p>
        </div>
        <Image
          src="/svg/ic-calendar-right-arrow.svg"
          alt="leftArrowIcon"
          width={30}
          height={30}
          onClick={handleNextMonth}
        />
      </div>

      <div className="grid my-auto grid-cols-7 mx-5 mt-4">
        {WEEK_DAY.map((week) => (
          <div key={week} className="flex items-center justify-center w-[44px] h-[44px]">
            {week}
          </div>
        ))}

        {handleDayText()}
      </div>
    </>
  );
};

export default Calender;
