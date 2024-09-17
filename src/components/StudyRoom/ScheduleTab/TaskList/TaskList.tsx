import TaskCard from "@/components/StudyRoom/ScheduleTab/TaskList/TaskCard/TaskCard";

import { useTaskListQuery } from "@/hooks/api/task/useTaskListQuery";

interface TaskListProps {
  studyRoomId: string;
}

const TaskList = ({ studyRoomId }: TaskListProps) => {
  const { data } = useTaskListQuery(studyRoomId);

  return (
    <div className="pt-[40px]">
      <h2 className="text-bold-18">
        📝 과제 목록
        <span className="text-[#E12C78]"> {data.data.length}</span>
      </h2>
      <span className="text-regular-14 text-blue-300"># 과제 목록을 확인해보세요</span>

      {data.data.length === 0 ? (
        <div className="flex items-center justify-between h-[50px] px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-lg mt-5 mb-2">
          <div className="flex items-center gap-3">
            <span className="text-bold-20">📖</span>
            <p className="text-medium-14 text-[#41364A] leading-5">오늘은 과제가 없습니다</p>
          </div>
        </div>
      ) : (
        data.data.map((task) => <TaskCard key={task.title} task={task} studyRoomId={studyRoomId} />)
      )}
    </div>
  );
};

export default TaskList;
