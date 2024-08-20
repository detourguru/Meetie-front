"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button/Button";

import { PATH } from "@/constants/path";

export default function ConfirmSuccess() {
  const router = useRouter();

  return (
    <section className="px-4 flex flex-col items-center pt-52 pb-40">
      <Image src="/svg/ic-calendar-success.svg" alt="icon" width={93} height={93} />
      <h3 className="text-[28px] font-bold mt-10">과제 인증 완료!</h3>
      <p className="text-[28px] text-primary-500 font-bold mb-4">+ 7 XP</p>
      <span className="text-[#707070] text-regular-14">종합 XP : 235</span>

      <Button
        className="w-full mt-24  mb-3 text-white"
        onClick={() => router.push(PATH.TASK_CONFIRM_ID(1))}
      >
        계속하기
      </Button>

      <Button className="w-full text-primary-500" variant="outlinePrimary">
        과제 인증 페이지로 가기
      </Button>
    </section>
  );
}
