import Image from "next/image";

import { format } from "date-fns";

interface CalendarHeaderProps {
  currentMonth: Date;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

const CalendarHeader = ({
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
}: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-8">
      <Image
        src="/svg/ic-calendar-left-arrow.svg"
        alt="leftArrowIcon"
        width={24}
        height={24}
        onClick={handlePrevMonth}
      />
      <div className="flex items-center justify-center gap-4 w-[106px]">
        <h1>{format(currentMonth, "M")}월</h1>
        <p>{format(currentMonth, "yyyy")}년</p>
      </div>
      <Image
        src="/svg/ic-calendar-right-arrow.svg"
        alt="leftArrowIcon"
        width={24}
        height={24}
        onClick={handleNextMonth}
      />
    </div>
  );
};

export default CalendarHeader;
