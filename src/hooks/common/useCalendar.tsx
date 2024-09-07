import { useState, useCallback } from "react";

import { addMonths, subMonths, startOfMonth, startOfWeek, addDays } from "date-fns";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart);
  const nowMonth = new Date();

  const dayList = Array.from({ length: 35 }, (_, index) => addDays(startDate, index));

  const weekDayList = Array.from({ length: 7 }, (_, index) => addDays(currentMonth, index));

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

  return { currentMonth, monthStart, dayList, weekDayList, handlePrevMonth, handleNextMonth };
};
