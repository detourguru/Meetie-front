import { useState, useRef, useEffect } from "react";

import { WEEK_DAY } from "@/constants/common";

interface DateType {
  year: number;
  month: number;
  date: number;
  day: string;
}

export const useWeekCalendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: WEEK_DAY[new Date().getDay()],
  };

  const [selectedDate, setSelectedDate] = useState<DateType>({
    year: today.year,
    month: today.month + 1,
    date: today.date,
    day: today.day,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSelectedDate = (date: DateType) => {
    setSelectedDate(date);
  };

  const renderDates = (
    year: number,
    month: number,
    date: number,
    length: number,
    direction: boolean,
  ) => {
    const rendered = Array.from({ length: length }).map((_, idx) => {
      const delta = direction ? idx + 1 : -(idx + 1);

      const eachDate = new Date(+year, +month, +date + delta);

      return {
        year: eachDate.getFullYear(),
        month: eachDate.getMonth() + 1,
        date: eachDate.getDate(),
        day: WEEK_DAY[eachDate.getDay()],
      };
    });

    return direction ? rendered : rendered.reverse();
  };

  const prevDates = renderDates(today.year, today.month, today.date, 14, false);
  const nextDates = renderDates(today.year, today.month, today.date, 14, true);

  const [dateList, setDateList] = useState<DateType[]>([...prevDates, today, ...nextDates]);

  const handleContainerScroll = () => {
    const target = containerRef.current;

    if (!target) return;

    if (target.scrollLeft === 0) {
      const { year, month, date } = dateList[0];
      const prev = renderDates(year, month - 1, date, 14, false);
      setDateList([...prev, ...dateList.slice(0, 15)]);
    }

    if (target.scrollLeft === target.scrollWidth - target.offsetWidth) {
      const { year, month, date } = dateList[dateList.length - 1];
      const next = renderDates(year, month - 1, date, 14, true);
      setDateList([...dateList.slice(dateList.length - 15), ...next]);
    }
  };

  const handleTodayClick = () => {
    handleSelectedDate(today);

    setDateList([...prevDates, today, ...nextDates]);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTo({
      left: (containerRef.current.scrollWidth - containerRef.current.offsetWidth) / 2,
      behavior: "instant",
    });
  }, [dateList]);

  return {
    dateList,
    handleContainerScroll,
    containerRef,
    handleTodayClick,
    selectedDate,
    handleSelectedDate,
  };
};
