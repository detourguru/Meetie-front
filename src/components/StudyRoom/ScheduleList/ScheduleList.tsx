import EmptySchedule from "@/components/StudyRoom/ScheduleList/EmptySchedule/EmptySchedule";
import ScheduleItem from "@/components/StudyRoom/ScheduleList/ScheduleItem/ScheduleItem";

import { useScheduleListQuery } from "@/hooks/api/schedule/useScheduleListQuery";

import type { DateType } from "@/types/common";

interface ScheduleListProps {
  studyRoomId: string;
  selectedDate: DateType;
}

const ScheduleList = ({ studyRoomId, selectedDate }: ScheduleListProps) => {
  const { data: scheduleData } = useScheduleListQuery(studyRoomId);

  const hasTodaySchedule = scheduleData.data.some(
    (data) =>
      data.scheduleDate &&
      new Date(data.scheduleDate).getFullYear() === selectedDate.year &&
      new Date(data.scheduleDate).getMonth() + 1 === selectedDate.month &&
      new Date(data.scheduleDate).getDate() === selectedDate.date,
  );

  return (
    <>
      <h4 className="text-bold-18">✍️ 다가오는 일정</h4>
      <span className="text-regular-14 text-blue-300"># 오늘의 일정을 확인해보세요</span>
      {scheduleData.data.length === 0 ? (
        <EmptySchedule isEmptyData />
      ) : scheduleData.data.length !== 0 && hasTodaySchedule ? (
        scheduleData.data.map((data) => (
          <ScheduleItem scheduleData={data} selectedDate={selectedDate} key={data.id} />
        ))
      ) : (
        <EmptySchedule />
      )}
    </>
  );
};

export default ScheduleList;
