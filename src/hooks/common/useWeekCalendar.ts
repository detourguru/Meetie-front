import { useState, useRef, useEffect } from "react";

import { WEEK_DAY, TODAY } from "@/constants/common";

import type { CalendarDateType, DateType } from "@/types/common";

export const useWeekCalendar = ({ selectedDate, handleSelectedDate }: CalendarDateType) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
        month: eachDate.getMonth(),
        date: eachDate.getDate(),
        day: WEEK_DAY[eachDate.getDay()],
      };
    });

    return direction ? rendered : rendered.reverse();
  };

  const { year, month, date, day } = TODAY;

  const centerDate = {
    year: year,
    month: month,
    date: date,
    day: WEEK_DAY[day],
  };

  const prevDates = renderDates(year, month, date, 14, false);
  const nextDates = renderDates(year, month, date, 14, true);

  const [dateList, setDateList] = useState<DateType[]>([...prevDates, centerDate, ...nextDates]);

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
    handleSelectedDate(centerDate);

    setDateList([...prevDates, centerDate, ...nextDates]);
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
