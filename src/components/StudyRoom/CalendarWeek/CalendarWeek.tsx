import { useWeekCalendar } from "@/hooks/common/useWeekCalendar";

import type { CalendarDateType } from "@/types/common";

const CalendarWeek = ({ selectedDate, handleSelectedDate }: CalendarDateType) => {
  const { dateList, handleContainerScroll, containerRef, handleTodayClick } = useWeekCalendar({
    selectedDate,
    handleSelectedDate,
  });

  return (
    <section className="px-4 py-7 bg-[#F9F9F9] border-t-2 border-[#E9E9E9]">
      <div className="flex justify-between">
        <h4>
          {selectedDate.year}년 {selectedDate.month + 1}월
        </h4>
        <button className="text-regular-12" onClick={handleTodayClick}>
          오늘로
        </button>
      </div>

      <div
        className="relative overflow-x-scroll hidden-scrollbar mt-6"
        ref={containerRef}
        onScroll={handleContainerScroll}
      >
        <div className="flex gap-4">
          {dateList.map((date) => (
            <div
              className="flex flex-col items-center gap-2"
              onClick={() => handleSelectedDate(date)}
              key={`${date.year}.${date.month}.${date.date}`}
            >
              <span
                className={`${date.date === selectedDate.date ? "text-primary-500 text-medium-12" : "text-regular-12"}`}
              >
                {date.day}
              </span>
              <div
                className={`flex justify-center items-center bg-[#F4F4F4] border  rounded-full w-[35px] h-[35px] text-bold-12 ${date.date === selectedDate.date ? "border-primary-500" : "border-[#eaeaea]"}`}
              >
                {date.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarWeek;
