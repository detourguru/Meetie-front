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

  return (
    <>
      <h4 className="text-bold-18">✍️ 다가오는 일정</h4>
      <span className="text-regular-14 text-blue-300"># 오늘의 일정을 확인해보세요</span>
      {scheduleData.data.length === 0 ? (
        <EmptySchedule isEmptyData />
      ) : (
        scheduleData.data.map((data) => (
          <ScheduleItem scheduleData={data} key={data.id} selectedDate={selectedDate} />
        ))
      )}
    </>
  );
};

export default ScheduleList;
