import BadgeArea from "@/components/MyPage/Ability/BadgeArea/BadgeArea";
import Header from "@/components/MyPage/Header/Header";
import ThickDivider from "@/components/MyPage/dividers/ThickDivider/ThickDivider";
import { BADGESE } from "@/constants/badges";
import type { BadgeType } from "@/types/badge";

export type TSelectedBadge = { type: string; badge: BadgeType };

export default function AbilityPage() {
  return (
    <>
      <Header
        title="내 능력 현황"
        infoIcon={
          <button>
            {/* TODO: svg 아이콘으로 변경 예정 */}
            <img src="" alt="info" width={40} />
          </button>
        }
      />

      <article className="border border-blue-500/10 rounded-lg bg-blue-200 px-6 py-3 my-5 mx-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-regular-12 text-gray-300">축하합니다!</p>
            <p className="text-semibold-14 text-gray-500">새로운 뱃지가 추가 됐어요!</p>
          </div>
          {/* TODO: svg 아이콘으로 변경 예정 */}
          <img src="" alt="alarm" className="w-[50px] h-[50px]" />
        </div>
      </article>

      <article className="flex justify-between items-center px-5 py-3">
        <header className="text-semibold-18 text-gray-500">내 뱃지</header>
        <div className="flex gap-1">
          {/* TODO: svg 아이콘으로 변경 예정 */}
          <img src="" alt="clock" />
          <p className="text-medium-12 text-blue-300">업데이트 매일 오전</p>
        </div>
      </article>

      <ThickDivider />

      {BADGESE.map((badges) => (
        <BadgeArea badges={badges} />
      ))}
    </>
  );
}
