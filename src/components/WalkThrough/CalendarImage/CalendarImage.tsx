import Image from "next/image";

const CalendarImage = () => {
  return (
    <li className="relative min-w-[375px] snap-always snap-center">
      <Image
        src="/svg/ic-walk-through-badge.svg"
        width={74}
        height={72}
        alt="badge"
        className="absolute top-[124px] left-[60px]"
      />
      <Image
        src="/svg/ic-walk-through-calendar.svg"
        width={213}
        height={194}
        alt="calendar"
        className="absolute top-[97px] left-[84px] animate-wave"
      />
    </li>
  );
};

export default CalendarImage;
