import Image from "next/image";

import type { WalkThroughImageProps } from "@/types/walkThrough";

const CalendarImage = ({ isMount }: WalkThroughImageProps) => {
  return (
    <li className="relative min-w-[375px] snap-always snap-center">
      <Image
        src="/svg/ic-walk-through-badge.svg"
        width={74}
        height={72}
        alt="badge"
        className={`absolute top-[134px] left-[60px] z-10 ${isMount && "tranform delay-200 animate-scaleUp"}`}
      />
      <Image
        src="/svg/ic-walk-through-calendar.svg"
        width={213}
        height={194}
        alt="calendar"
        className={`absolute top-[107px] left-[84px] ${isMount && "transform delay-200 animate-scaleUp"}`}
      />
    </li>
  );
};

export default CalendarImage;
