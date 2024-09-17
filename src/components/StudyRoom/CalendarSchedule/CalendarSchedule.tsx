// import Image from "next/image";

const CalendarSchedule = () => {
  return (
    <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
      <div className="flex items-center gap-3">
        <span className="text-bold-20">⏰</span>
        <p className="text-medium-14 text-[#41364A] leading-5">오늘은 일정이 없습니다</p>
      </div>
    </div>
    // <div className="flex items-center gap-2 mt-6 px-4 py-3 bg-[#F5F5F5] border border-primary-500 rounded-lg">
    //   <p className="text-medium-14 text-[#434343]">AM 12:00</p>
    //   <div className="w-1 h-5 border-l border-[#7876E3]" />
    //   <div className="flex flex-col">
    //     <p className="text-bold-14 text-[#434343]">과제 제출</p>
    //     <span className="text-regular-12 text-[#82829B]">6월 3일 오전 12시</span>
    //   </div>
    //   <div className="ml-auto">
    //     <Image src="/svg/ic-calendar-outline-check-pri.svg" alt="icon" width={24} height={24} />
    //   </div>
    // </div>
  );
};

export default CalendarSchedule;
