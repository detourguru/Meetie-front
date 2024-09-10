import Image from "next/image";
import Link from "next/link";

import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";
import TaskConfirmList from "@/components/StudyRoom/TaskConfirmList/TaskConfirmList";
import TaskList from "@/components/StudyRoom/TaskTab/TaskList/TaskList";

import { PATH } from "@/constants/path";

import type { CalendarDateType } from "@/types/common";

interface TaskTabProps extends CalendarDateType {
  isOwner: boolean;
  studyRoomId: string;
}

const TaskTab = ({ studyRoomId, selectedDate, handleSelectedDate, isOwner }: TaskTabProps) => {
  return (
    <>
      <div className="px-4">
        {isOwner && (
          <Link href={PATH.TASK_CREATE(studyRoomId)}>
            <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-bold-20">📚</span>
                <p className="text-medium-14 text-[#41364A] leading-5">
                  팀원들에게 과제를 제공해 보세요.
                </p>
              </div>
              <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={6} height={12} />
            </div>
          </Link>
        )}

        <h2 className="text-bold-18 py-4">🗓️ 과제 일정</h2>
      </div>

      <CalendarWeek selectedDate={selectedDate} handleSelectedDate={handleSelectedDate} />

      <div className="px-4 pb-[120px]">
        <div className="pt-[40px]">
          <h4 className="text-semibold-18">
            ✍️ {selectedDate.month}월 {selectedDate.date}일 {selectedDate.day}
            요일
          </h4>
          <span className="text-regular-14 text-blue-300">
            #과제 인증을 완료한 팀원들을 확인해 보세요.
          </span>

          <TaskConfirmList selectedDate={selectedDate} studyRoomId={studyRoomId} />
        </div>

        <TaskList studyRoomId={studyRoomId} />
      </div>
    </>
  );
};

export default TaskTab;
