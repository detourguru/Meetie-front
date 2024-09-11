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

      {data.data.length === 0 ? (
        <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-bold-20">📖</span>
            <p className="text-medium-14 text-[#41364A] leading-5">오늘은 인증할 과제가 없습니다</p>
          </div>
        </div>
      ) : (
        data.data.map((task) => (
          <TaskCard
            key={task.title}
            task={task}
            isDeadline={isDeadline}
            studyRoomId={studyRoomId}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
