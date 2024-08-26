import { twJoin } from "tailwind-merge";

import BadgeIcon from "@/components/MyPage/BadgeIcon/BadgeIcon";

import { BADGE_DATA } from "@/constants/badges";

interface BadgeCardProps {
  level: number;
  type: string;
  title?: string;
}

const BadgeCard = ({ level, type, title }: BadgeCardProps) => {
  const widthAndHeight = level === 1 ? 61 : 78;
  const badge = BADGE_DATA.find((badges) => badges.type === type)?.badges.find(
    (badge) => badge.level === level,
  );

  return (
    <article className="flex flex-col gap-3.5 items-center justify-end">
      <BadgeIcon
        src={badge?.icon ?? ""}
        alt={badge?.title ?? ""}
        width={widthAndHeight}
        height={widthAndHeight}
      />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-semibold-12">{title ? title : type} 뱃지</p>
        <div
          className={twJoin(
            `px-2 py-1 rounded-lg text-white text-medium-12`,
            level === 3 ? "bg-primary-500" : "bg-blue-400",
            level === 1 && "opacity-50",
          )}
        >
          레벨 {level}
        </div>
      </div>
    </article>
  );
};

export default BadgeCard;
