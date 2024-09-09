import TaskCard from "@/components/StudyRoom/TaskTab/TaskList/TaskCard/TaskCard";

import { useTaskListQuery } from "@/hooks/api/task/useTaskListQuery";

interface TaskListProps {
  studyRoomId: string;
}

const TaskList = ({ studyRoomId }: TaskListProps) => {
  const { data } = useTaskListQuery(studyRoomId);

  console.log(data);

  return (
    <section className="px-4 pt-[34px]">
      <h2 className="text-bold-18">
        📝 과제 목록 <span className="text-[#E12C78]">2</span>
      </h2>
      {/* <div className="w-fit flex items-center gap-1 float-right text-semibold-10 text-[#D43477] bg-[#FF2C84]/10 px-2 py-1 rounded-[4px]">
        <Image src="/svg/ic-calendar-clock.svg" alt="icon" width={11} height={12} />
        <span>인증 마감까지 ･ 08:23:22</span>
      </div> */}
      {data.data.map((task) => (
        <TaskCard key={task.title} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
