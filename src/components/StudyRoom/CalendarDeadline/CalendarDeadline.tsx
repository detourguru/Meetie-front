import Image from "next/image";

import Button from "@/components/common/Button/Button";

const CalendarDeadline = () => {
  return (
    <section className="px-4 pt-[34px] mb-[60px]">
      <h4 className="text-bold-18 inline">
        🚨 마감 직전 과제 <span className="text-[#E12C78]">2</span>
      </h4>
      <div className="w-fit flex items-center gap-1 float-right text-semibold-10 text-[#D43477] bg-[#FF2C84]/10 px-2 py-1 rounded-[4px]">
        <Image src="/svg/ic-calendar-clock.svg" alt="icon" width={11} height={12} />
        <span>인증 마감까지 ･ 08:23:22</span>
      </div>
      <div className="relative bg-white rounded-lg border border-[#E0DDF1] px-4 py-5 mt-3 mb-4">
        <h4 className="text-medium-16">콜로소 인강 1강 완강 인증하기</h4>
        <p className="text-medium-12 text-[#82829B]">
          <span className="text-[#4C4CC7]">3명의 팀원</span>이 수행했어요 👍
        </p>
        <div
          className={`absolute top-4 right-4 flex items-center justify-center w-[50px] h-[50px] bg-[conic-gradient(var(--tw-gradient-stops))] from-primary-500 from-90% to-[#EDF1FF] to-90% rounded-full`}
        >
          <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
            <p className="text-bold-12 text-center text-primary-500">90%</p>
          </div>
        </div>
        <Button className="w-full mt-8 py-[10px]" variant="secondary">
          <span className="text-white text-semibold-16">인증하기</span>
        </Button>
      </div>
    </section>
  );
};

export default CalendarDeadline;
