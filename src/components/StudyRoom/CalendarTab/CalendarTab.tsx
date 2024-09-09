import CalendarCheck from "@/components/StudyRoom/CalendarCheck/CalendarCheck";
import CalendarSchedule from "@/components/StudyRoom/CalendarSchedule/CalendarSchedule";
import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";
import TaskList from "@/components/StudyRoom/TaskTab/TaskList/TaskList";

import type { CalendarDateType } from "@/types/common";

interface CalendarTabProps extends CalendarDateType {
  studyRoomId: string;
}

const CalendarTab = ({ studyRoomId, selectedDate, handleSelectedDate }: CalendarTabProps) => {
  return (
    <div className="pb-[120px]">
      <div className="px-4 pt-[40px] pb-5">
        <p className="text-bold-18">👍 팀원과의 약속</p>
      </div>
      <CalendarWeek selectedDate={selectedDate} handleSelectedDate={handleSelectedDate} />
      <CalendarCheck />

      <div className="px-4 pt-[40px]">
        <h4 className="text-bold-18">✍️ 다가오는 일정</h4>
        <CalendarSchedule />

        <TaskList studyRoomId={studyRoomId} isDeadline />
      </div>
    </div>
  );
};

export default CalendarTab;
