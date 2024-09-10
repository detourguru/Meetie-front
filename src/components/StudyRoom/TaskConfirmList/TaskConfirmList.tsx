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
      {taskConfirmData.data.map((data) => (
        <TaskConfirmItem taskData={data} key={data.id} />
      ))}
    </div>
  );
};

export default TaskConfirmList;
