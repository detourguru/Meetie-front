import Image from "next/image";

import CalendarCheck from "@/components/StudyRoom/CalendarCheck/CalendarCheck";
import CalendarDeadline from "@/components/StudyRoom/CalendarDeadline/CalendarDeadline";
import CalendarSchedule from "@/components/StudyRoom/CalendarSchedule/CalendarSchedule";
import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";

const CalendarTab = () => {
  return (
    <>
      <section className="bg-white">
        <section className="px-4 pt-[34px] pb-5">
          <p className="text-bold-18">👍 팀원과의 약속</p>
          <span className="text-regular-14 text-[#82829B]">
            #이번 주의 과제와 회의 시간을 확인해 보세요
          </span>
        </section>
        <CalendarWeek />
        <CalendarCheck />
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
        <CalendarDeadline />
      </section>
    </>
  );
};

export default CalendarTab;
