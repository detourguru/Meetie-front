import Image from "next/image";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

import { convertDateTime } from "@/utils/date";

import type { TaskConfirmType } from "@/types/taskConfirm";

interface TaskConfirmItemProps {
  taskData: TaskConfirmType;
}

const TaskConfirmItem = ({ taskData }: TaskConfirmItemProps) => {
  const { userData } = useUserInformationQuery(taskData.user_id);

  return (
    <section className="flex mt-5 gap-[10px]">
      <div className="h-fit mt-3 text-regular-14 pr-[10px] border-r-2 border-primary-500">
        <p>{convertDateTime(taskData.created_at)}</p>
      </div>
      <div className="relative w-full flex flex-col px-[18px] py-[14px] bg-[#FAFAFA] border border-[#EBE9F5] rounded-lg shadow-sm">
        <h4 className="text-semibold-16 text-gray-700">{userData.data.name}</h4>
        <span className="mb-[14px] text-regular-10 text-[#82829B]">사진으로 인증함</span>
        <Image
          className="absolute right-3"
          src="/svg/ic-confirm-check-gray.svg"
          alt="icon"
          width={24}
          height={24}
        />
        <Image
          src={taskData.mediaList[0]}
          alt="mediaImg"
          width={256}
          height={120}
          className="rounded-[4px] w-[256px] h-[120px] object-cover"
        />
      </div>
    </section>
  );
};

export default TaskConfirmItem;
