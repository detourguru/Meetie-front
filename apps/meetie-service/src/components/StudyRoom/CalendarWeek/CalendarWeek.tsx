import Image from "next/image";

const CalendarWeek = () => {
  return (
    <section className="px-4 py-7 bg-[#F9F9F9] border-t-2 border-[#E9E9E9]">
      <h4 className="inline">6월</h4>
      <Image
        className="float-right"
        src="/svg/ic-calendar-cal-check.svg"
        alt="icon"
        width={18}
        height={20}
      />
      <div className="flex justify-around text-regular-12 mt-6 mb-2">
        <span className="text-medium-12 text-primary-500">월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
        <span>일</span>
      </div>
      <div className="flex justify-around text-[12px] font-bold">
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-primary-500 rounded-full">3</p>
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-[#EAEAEA] rounded-full">4</p>
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-[#EAEAEA] rounded-full">5</p>
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-[#EAEAEA] rounded-full">6</p>
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-[#EAEAEA] rounded-full">7</p>
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-[#EAEAEA] rounded-full">8</p>
        <p className="px-[13px] py-[8px] bg-[#F4F4F4] border border-[#EAEAEA] rounded-full">9</p>
      </div>
    </section>
  );
};

export default CalendarWeek;
