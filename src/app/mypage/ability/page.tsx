import Image from "@/components/common/Image/Image";
import AbilityHeader from "@/components/MyPage/Ability/AbilityHeader/AbilityHeader";
import BadgeArea from "@/components/MyPage/Ability/BadgeArea/BadgeArea";
import ClockIcon from "@/components/MyPage/ClockIcon";
import ThickDivider from "@/components/MyPage/dividers/ThickDivider/ThickDivider";

import { BADGE_DATA } from "@/constants/badges";

export default function AbilityPage() {
  return (
    <>
      <AbilityHeader />

      <article className="border border-blue-500/10 rounded-lg bg-blue-200 px-6 py-3 mb-5 mt-[72px] mx-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-regular-12 text-gray-300">축하합니다!</p>
            <p className="text-semibold-14 text-gray-500">새로운 뱃지가 추가 됐어요!</p>
          </div>
          <Image src="/img/img-megaphone.png" alt="megaphone" className="w-[50px] h-[50px]" />
        </div>
      </article>

      <article className="flex justify-between items-center px-5 py-3">
        <header className="text-semibold-18 text-gray-500">내 뱃지</header>
        <div className="flex gap-1 items-center">
          <ClockIcon color="#82829B" width="12" height="11" />
          <p className="text-medium-12 text-blue-300">업데이트 매일 오전</p>
        </div>
      </article>

      <ThickDivider />

      <div className="flex flex-col my-8 gap-8">
        {BADGE_DATA.map((badges, index) => (
          <BadgeArea badges={badges} key={`badge/${index}`} />
        ))}
      </div>
    </>
  );
}
