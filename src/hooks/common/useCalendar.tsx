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

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const nowMonth = new Date();

  const dayList = Array.from({ length: 35 }, (_, index) => addDays(startDate, index));

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

  return { currentMonth, handlePrevMonth, handleNextMonth, handleDayText };
};
