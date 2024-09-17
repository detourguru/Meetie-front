import CalendarWeek from "@/components/StudyRoom/CalendarWeek/CalendarWeek";
import ScheduleList from "@/components/StudyRoom/ScheduleList/ScheduleList";
import TaskList from "@/components/StudyRoom/ScheduleTab/TaskList/TaskList";
import TaskConfirmList from "@/components/StudyRoom/TaskConfirmList/TaskConfirmList";

import type { CalendarDateType } from "@/types/common";

interface TaskTabProps extends CalendarDateType {
  studyRoomId: string;
}

const ScheduleTab = ({ studyRoomId, selectedDate, handleSelectedDate }: TaskTabProps) => {
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
        <ScheduleList studyRoomId={studyRoomId} selectedDate={selectedDate} />
        <TaskList studyRoomId={studyRoomId} />
        <TaskConfirmList selectedDate={selectedDate} studyRoomId={studyRoomId} />
      </div>
    </>
  );
};

export default ScheduleTab;
