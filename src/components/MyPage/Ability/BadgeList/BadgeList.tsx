"use client";

import BadgeArea from "@/components/MyPage/Ability/BadgeArea/BadgeArea";

import { BADGE_DATA } from "@/constants/badges";

import { useBadge } from "@/hooks/mypage/useBadge";

const BadgeList = () => {
  const { getBadgeLevel, getBadgeCondition } = useBadge();

  return (
    <div className="flex flex-col my-8 gap-8 mt-[72px]">
      {BADGE_DATA.map((badges, index) => (
        <BadgeArea
          badges={badges}
          key={`badge/${index}`}
          level={getBadgeLevel(badges.type)}
          getCondition={getBadgeCondition}
        />
      ))}
    </div>
  );
};
export default BadgeList;
