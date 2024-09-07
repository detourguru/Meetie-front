import { useWeekCalendar } from "@/hooks/common/useWeekCalendar";

const CalendarWeek = () => {
  const { today, dateList, handleContainerScroll, containerRef, handleTodayClick } =
    useWeekCalendar();

  return (
    <section className="px-4 py-7 bg-[#F9F9F9] border-t-2 border-[#E9E9E9]">
      <div className="flex justify-between">
        <h4>{today.month + 1}월</h4>
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
            <div className="flex flex-col items-center gap-2">
              <span className="text-regular-12">{date.day}</span>
              <div className="flex justify-center items-center bg-[#F4F4F4] border border-primary-500 rounded-full w-[35px] h-[35px] text-bold-12">
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
