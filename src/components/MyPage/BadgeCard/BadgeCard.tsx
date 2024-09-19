import { twJoin } from "tailwind-merge";

import BadgeIcon from "@/components/MyPage/BadgeIcon/BadgeIcon";

import { BADGE_DATA } from "@/constants/badges";

interface BadgeCardProps {
  level: number;
  type: string;
}

const BadgeCard = ({ level, type }: BadgeCardProps) => {
  const badgeLevel = level < 1 ? 1 : level;
  const widthAndHeight = level < 2 ? 61 : 78;
  const badge = BADGE_DATA.find((badges) => badges.value === type)?.badges.find(
    (badge) => badge.level === badgeLevel,
  );

  return (
    <article className="flex flex-col gap-3.5 items-center justify-end">
      <BadgeIcon
        src={badge?.icon ?? ""}
        alt={badge?.title ?? ""}
        width={widthAndHeight}
        height={widthAndHeight}
        variant={level === 0 ? "tertiary" : "default"}
      />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-semibold-12">{type} 뱃지</p>
        <div
          className={twJoin(
            `px-2 py-1 rounded-lg text-white text-medium-12`,
            level === 3 ? "bg-primary-500" : "bg-blue-400",
            level < 2 && "opacity-50",
            level === 0 && "bg-gray-200",
          )}
        >
          레벨 {level}
        </div>
      </div>
    </article>
  );
};

export default BadgeCard;
