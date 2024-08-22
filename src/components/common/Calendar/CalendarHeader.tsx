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
  );
};

export default CalendarHeader;
