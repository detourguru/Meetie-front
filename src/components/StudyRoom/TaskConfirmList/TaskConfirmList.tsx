import TaskConfirmItem from "@/components/StudyRoom/TaskConfirmList/TaskConfirmItem/TaskConfirmItem";

import { useTaskConfirmListQuery } from "@/hooks/api/task-confirm/useTaskConfirmListQuery";

import type { DateType } from "@/types/common";

interface TaskConfirmListProps {
  studyRoomId: string;
  selectedDate: DateType;
}

const TaskConfirmList = ({ studyRoomId, selectedDate }: TaskConfirmListProps) => {
  const referenceDate = `${selectedDate.year}-${selectedDate.month
    .toString()
    .padStart(2, "0")}-${selectedDate.date.toString().padStart(2, "0")}`;

  const { data: taskConfirmData } = useTaskConfirmListQuery(studyRoomId, referenceDate);

  return (
    <div className="flex flex-col gap-5">
      {taskConfirmData.data.length === 0 ? (
        <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-bold-20">📕</span>
            <p className="text-medium-14 text-[#41364A] leading-5">
              오늘 아직 과제를 인증한 멤버가 없습니다
            </p>
          </div>
        </div>
      ) : (
        taskConfirmData.data.map((data) => <TaskConfirmItem taskData={data} key={data.id} />)
      )}
    </div>
  );
};

export default TaskConfirmList;
