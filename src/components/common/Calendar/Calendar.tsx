import { useState, useCallback } from "react";

import { format, addMonths, subMonths, startOfMonth, startOfWeek, addDays } from "date-fns";

import CalendarHeader from "@/components/common/Calendar/CalendarHeader";

const WEEK_DAY = ["일", "월", "화", "수", "목", "금", "토"];

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const dayList = Array.from({ length: 35 }, (_, index) => addDays(startDate, index));
  const nowMonth = new Date();

  const handlePrevMonth = useCallback(() => {
    if (currentMonth <= nowMonth) {
      setCurrentMonth(nowMonth);
    } else {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
  }, [currentMonth]);

  const handleNextMonth = useCallback(() => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }, [currentMonth]);

  const handleDayText = useCallback(() => {
    return dayList.map((dayData) => {
      return (
        <div
          key={dayData.toString()}
          className="flex justify-center items-center w-[44px] h-[44px]"
          //   css={dayStyle(
          //     isSameMonth(monthStart, dayData),
          //     false,
          //     isSameDay(startDay, dayData),
          //     isSameDay(endDay, dayData),
          //   )}
        >
          <p className="flex justify-center items-center w-[30px] h-[30px]">
            {format(dayData, "d")}
          </p>
        </div>
      );
    });
  }, [currentMonth]);

  return (
    <>
      <CalendarHeader
        currentMonth={currentMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />

      <div className="grid my-auto grid-cols-7 mx-5">
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
