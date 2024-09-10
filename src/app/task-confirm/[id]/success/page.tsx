import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button/Button";

import { PATH } from "@/constants/path";

import type { ParamIdType } from "@/types/common";

export default function ConfirmSuccess({ params }: ParamIdType) {
  return (
    <section className="px-4 flex flex-col items-center pt-52 pb-40">
      <Image src="/svg/ic-calendar-success.svg" alt="icon" width={93} height={93} />
      <h3 className="text-[28px] font-bold mt-10">과제 인증 완료!</h3>

      {/* todo : 추후 구현 */}
      <p className="text-[28px] text-primary-500 font-bold mb-4">+ 7 XP</p>
      <span className="text-[#707070] text-regular-14">종합 XP : 235</span>

      <div className="fixed bottom-0 bg-white px-4 py-6">
        <Link href={PATH.TASK_CONFIRM_DETAIL(String(params.id))}>
          <Button size="xl">
            <p className="text-bold-16 text-white">과제 인증 보러가기</p>
          </Button>
        </Link>
      </div>
    </section>
  );
}
