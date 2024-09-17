"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { PATH } from "@/constants/path";

interface CreateTaskButtonProps {
  studyRoomId: string;
}

const CreateTaskButton = ({ studyRoomId }: CreateTaskButtonProps) => {
  const router = useRouter();

  return (
    <div
      className="fixed bottom-16 right-1/2 translate-x-[170px] rounded-full bg-white overflow-hidden z-50 cursor-pointer"
      onClick={() => router.push(PATH.SCHEDULE_CREATE(studyRoomId))}
    >
      <div className="bg-gradient-to-tl from-[#8655FF]/70 to-[#8655FF] p-3.5">
        <Image src="/svg/ic-community-write.svg" alt="write post" width={19} height={18} />
      </div>
    </div>
  );
};

export default CreateTaskButton;
