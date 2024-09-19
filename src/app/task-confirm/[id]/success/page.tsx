import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button/Button";
import Pop from "@/components/OnBoarding/Pop/Pop";

import { PATH } from "@/constants/path";

import type { ParamIdType } from "@/types/common";

export default function ConfirmSuccess({ params }: ParamIdType) {
  return (
    <section className="relative h-full px-4 pt-52 flex flex-col items-center">
      <Image src="/svg/ic-calendar-success.svg" alt="icon" width={93} height={93} />
      <h3 className="text-[28px] font-bold mt-10">과제 인증 완료!</h3>

      {/* todo : 추후 구현 */}
      <p className="text-[28px] text-primary-500 font-bold mb-4">+ 1 XP</p>

      <div className="fixed bottom-0 bg-white px-4 py-6 flex flex-col gap-2">
        <Link href={PATH.TASK_CONFIRM_DETAIL(String(params.id))}>
          <Button size="xl">
            <p className="text-bold-16 text-white">과제 인증 보러가기</p>
          </Button>
        </Link>
        <Link href={PATH.ABILITY}>
          <Button size="xl" variant="outlinePrimary">
            <p className="text-bold-16 text-primary-400">뱃지 현황 보러가기</p>
          </Button>
        </Link>
      </div>
      <Pop />
    </section>
  );
}
