import CalendarDeadline from "@/components/CalendarDeadline/CalendarDeadline";
import CalendarSchedule from "@/components/CalendarSchedule/CalendarSchedule";
import CalendarWeek from "@/components/CalendarWeek/CalendarWeek";
import Image from "next/image";

export default function Calendar() {
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
      {/* tab contents (탭을 눌렀을때 보이는 화면 -> 컴포넌트로 빼기) */}
      <section className="bg-white">
        <section className="px-4 pt-[34px] pb-5">
          <p className="text-bold-18">👍 팀원과의 약속</p>
          <span className="text-regular-14 text-[#82829B]">
            #이번 주의 과제와 회의 시간을 확인해 보세요
          </span>
        </section>
        {/* calendar */}
        <CalendarWeek />
      </section>
      <section className="px-4 pt-[34px]">
        <h4 className="text-bold-18">✍️ 다가오는 일정</h4>
        <span className="text-regular-14 text-[#82829B]">
          #이번 주의 과제와 회의 시간을 확인해보세요
        </span>
        <CalendarSchedule />
      </section>
      <section className="px-4 pt-[34px] mb-[60px]">
        <h4 className="text-bold-18 inline">
          🚨 마감 직전 과제 <span className="text-[#E12C78]">2</span>
        </h4>
        <div className="w-fit flex items-center gap-1 float-right text-semibold-10 text-[#D43477] bg-[#FF2C84]/10 px-2 py-1 rounded-[4px]">
          <Image src="/svg/ic-calendar-clock.svg" alt="icon" width={11} height={12} />
          <span>인증 마감까지 ･ 08:23:22</span>
        </div>
        {/* item */}
        <CalendarDeadline />
      </section>
    </main>
  );
}
