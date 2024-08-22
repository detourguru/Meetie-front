import { useState, useCallback } from "react";

import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  startOfWeek,
  addDays,
  isSameMonth,
  isSunday,
  isSaturday,
  isToday,
} from "date-fns";

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
    return dayList.map((dayData) => (
      <div key={dayData.toString()} className="flex justify-center items-center w-[44px] h-[44px]">
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
      <CalendarHeader
        currentMonth={currentMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />

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
