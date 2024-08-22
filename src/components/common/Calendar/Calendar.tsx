import Image from "next/image";

import { useMemo, Fragment } from "react";

import { startOfMonth, addDays, format, getDay, getDaysInMonth } from "date-fns";

import CalendarCard from "@/components/common/Calendar/CalendarCard";

import { useCalendar } from "@/hooks/common/useCalendar";

const WEEK_DAY = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = () => {
  const { currentDate, handlePrevDate, handleNextDate } = useCalendar();

  const CalendarDateCards = useMemo(() => {
    const monthStart = startOfMonth(currentDate);
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getDay(monthStart);

    const calendarArray = Array.from({ length: daysInMonth + firstDayOfMonth }, (_, i) => {
      if (i < firstDayOfMonth) {
        return "";
      }
      return addDays(monthStart, i - firstDayOfMonth);
    });

    return calendarArray.map((day, index) => {
      return (
        <Fragment key={day ? format(day, "yyyymd") : index}>
          <CalendarCard day={day} />
        </Fragment>
      );
    });
  }, [currentDate]);

  return (
    <div className="w-[280px] mt-10">
      <div className="flex items-center justify-between">
        <p className="text-regular-14">{format(currentDate, "yyyy년 M월")}</p>
        <div className="flex">
          <Image
            src="/svg/ic-calendar-left-arrow.svg"
            alt="leftArrowIcon"
            width={20}
            height={20}
            onClick={handlePrevDate}
          />
          <Image
            src="/svg/ic-calendar-right-arrow.svg"
            alt="leftArrowIcon"
            width={20}
            height={20}
            onClick={handleNextDate}
          />
        </div>
      </div>
      <div className="grid my-auto grid-cols-7">
        {WEEK_DAY.map((day) => (
          <div className="flex justify-center items-center" key={day}>
            {day}
          </div>
        ))}
        {CalendarDateCards}
      </div>
    </div>
  );
};

export default Calendar;
