import CalendarSchedule from "@/components/StudyRoom/CalendarSchedule/CalendarSchedule";
import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";
import TaskConfirmList from "@/components/StudyRoom/TaskConfirmList/TaskConfirmList";
import TaskList from "@/components/StudyRoom/TaskTab/TaskList/TaskList";

import type { CalendarDateType } from "@/types/common";

interface TaskTabProps extends CalendarDateType {
  studyRoomId: string;
}

const TaskTab = ({ studyRoomId, selectedDate, handleSelectedDate }: TaskTabProps) => {
  return (
    <>
      <div className="px-4">
        <h4 className="text-bold-18 py-4">
          🗓️ {selectedDate.month}월 {selectedDate.date}일 {selectedDate.day}
          요일
        </h4>
      </div>

      <CalendarWeek selectedDate={selectedDate} handleSelectedDate={handleSelectedDate} />

      <div className="px-4 pt-[40px] pb-[120px]">
        <h4 className="text-bold-18">✍️ 다가오는 일정</h4>
        <span className="text-regular-14 text-blue-300"># 오늘의 일정을 확인해보세요</span>

        <CalendarSchedule />
        <TaskList studyRoomId={studyRoomId} />

        <div className="pt-[40px]">
          <h4 className="text-bold-18">🖊️ 과제 인증 목록</h4>
          <span className="text-regular-14 text-blue-300">
            # 과제 인증을 완료한 팀원들을 확인해 보세요
          </span>

          <TaskConfirmList selectedDate={selectedDate} studyRoomId={studyRoomId} />
        </div>
      </div>
    </>
  );
};

export default TaskTab;
