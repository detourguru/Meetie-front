import Image from "next/image";

import { format } from "date-fns";

import { WEEK_DAY } from "@/constants/common";

import { useCalendar } from "@/hooks/common/useCalendar";

const Calender = () => {
  const { currentMonth, handlePrevMonth, handleNextMonth, handleDayText } = useCalendar();

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
