import Calendar from "@/components/StudyRoom/Calendar/Calendar";
import Image from "next/image";

export default function StudyRoom() {
  return (
    <main>
      <section className="bg-[#EBE9F5] px-4 pt-10 pb-4">
        {/* 임시 헤더 - 추후 컴포넌트로 교체 */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-bold-18">스터디룸</h3>
          <Image src="/svg/ic-calendar-add.svg" alt="icon" width={32} height={32} />
        </div>
        <div className="flex justify-end">
          <p className="bg-[#8655FF] text-white p-[10px] py-[5px] text-regular-12 rounded-l-lg">
            진행중 3
          </p>
          <p className="bg-white px-[10px] py-[5px] border border-[#8655FF] rounded-r-lg text-regular-12 text-[#82829B]">
            진행완료
          </p>
        </div>
        <section className="relative flex mt-3 p-4 bg-white border border-[#E9E9E9] border-inset rounded-md drop-shadow-sm">
          <div className="w-[20px] h-10 flex justify-center items-center mr-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
            <Image src="/svg/ic-calendar-vertical.svg" alt="icon" width={18} height={19} />
          </div>
          <div>
            <p className="text-regular-16">피그마 정복하기🔥🔥</p>
            <span className="text-regular-12 text-[#82829B]">디자인 | 멤버 5</span>
          </div>
          <div className="absolute flex items-center right-4 bottom-4">
            <span className="text-regular-12 text-primary-500 border border-primary-500 rounded-[10px] px-1">
              D-30
            </span>
          </div>
        </section>
      </section>
      {/* tab */}
      <div className="h-[46px] grid grid-cols-3 items-center bg-white text-[#82829B] text-medium-16 text-center leading-[46px]">
        <p className="border-b-2 border-primary-500 text-primary-500">캘린더</p>
        <p>과제</p>
        <p>채팅</p>
      </div>
      <Calendar />
    </main>
  );
}
