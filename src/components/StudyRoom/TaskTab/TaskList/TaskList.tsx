import TaskCard from "@/components/StudyRoom/TaskTab/TaskList/TaskCard/TaskCard";

import { useTaskListQuery } from "@/hooks/api/task/useTaskListQuery";

interface TaskListProps {
  studyRoomId: string;
  isDeadline?: boolean;
}

const TaskList = ({ studyRoomId, isDeadline }: TaskListProps) => {
  const { data } = useTaskListQuery(studyRoomId);

  return (
    <div className="pt-[40px]">
      <div className="flex justify-between">
        <h2 className="text-bold-18">
          {isDeadline ? "🚨 마감 직전 과제 " : "📝 과제 목록 "}
          <span className="text-[#E12C78]">{data.data.length}</span>
        </h2>
      </div>
      <span className="text-regular-14 text-blue-300">
        {isDeadline ? "#마감이 얼마 남지 않은 과제에요" : "#과제 목록을 확인해보세요"}
      </span>

      {data.data.map((task) => (
        <TaskCard key={task.title} task={task} isDeadline={isDeadline} />
      ))}
    </div>
  );
};

export default TaskList;
