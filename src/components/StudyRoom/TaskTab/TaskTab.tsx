import Image from "next/image";

import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";
import TaskConfirm from "@/components/StudyRoom/TaskConfirm/TaskConfirm";

const TaskTab = () => {
  return (
    <>
      <section className="bg-white">
        <section className="px-4 pt-[34px] pb-5">
          <p className="text-bold-18">🗓️ 과제 일정</p>
          <span className="text-regular-14 text-[#82829B]">
            #주차별 과제 현황을 확인하고 소통해요.
          </span>
          <section className="flex items-center justify-between h-[50px] my-4 px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
            <div className="flex items-center gap-3">
              <span className="text-bold-20">📚</span>
              <p className="text-medium-14 text-[#41364A] leading-5">
                팀원들에게 과제를 제공해 보세요.
              </p>
            </div>
            <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={6} height={12} />
          </section>
        </section>
        <CalendarWeek />
        <section className="px-4 pt-[34px]">
          <h4 className="text-semibold-18">✍️ 6월 4일 화요일</h4>
          <span className="text-regular-14 text-[#82829B]">
            #과제 인증을 완료한 팀원들을 확인해 보세요.
          </span>
          <TaskConfirm />
          <button className="w-full h-11 mt-6 mb-[34px] flex items-center justify-center gap-2 border border-dotted border-[#686868] rounded-lg text-regular-14 text-[#82829B]">
            <Image src="/svg/ic-confirm-plus.svg" alt="icon" width={20} height={20} />
            과제 인증하기
          </button>
        </section>
        <section className="pt-6 pb-20 px-4 border-t-4 border-[#EDEDED]">
          <div className="flex items-center justify-between px-3 py-3 border border-[#DCD8EF] rounded-lg">
            <Image src="/svg/ic-confirm-mesage.svg" alt="icon" width={68} height={60} />
            <div className="flex flex-col">
              <span className="text-regular-12 text-[#2B2B2B]">아직 제출하지 못한 팀원들에게</span>
              <span className="text-semibold-16 text-[#2B2B2B]">응원 카드를 보내보세요!</span>
            </div>
            <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={9} height={18} />
          </div>
        </section>
      </section>
    </>
  );
};

export default TaskTab;
