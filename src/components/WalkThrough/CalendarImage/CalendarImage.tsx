import Image from "next/image";

const CalendarImage = () => {
  return (
    <>
      <Image
        src="/svg/ic-walk-through-badge.svg"
        width={74}
        height={72}
        alt="badge"
        className="absolute top-[124px] left-[60px]"
      />
      <Image
        src="/svg/ic-walk-through-calendar.svg"
        width={212}
        height={194}
        alt="calendar"
        className="absolute top-[97px] left-[84px]"
      />
    </>
  );
};

export default CalendarImage;
