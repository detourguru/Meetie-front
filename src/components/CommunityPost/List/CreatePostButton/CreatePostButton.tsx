"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { PATH } from "@/constants/path";

const CreatePostButton = () => {
  const router = useRouter();

  return (
    <div
      className="fixed bottom-20 right-1/2 translate-x-[170px] rounded-full bg-white overflow-hidden z-50"
      onClick={() => router.push(PATH.COMMUNITY_CREATE)}
    >
      <div className="bg-gradient-to-tl from-[#8655FF]/70 to-[#8655FF] p-3.5">
        <Image src="/svg/ic-community-write.svg" alt="write post" width={19} height={18} />
      </div>
    </div>
  );
};

export default CreatePostButton;
