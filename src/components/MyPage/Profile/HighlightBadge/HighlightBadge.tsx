import { BADGE_DATA } from "@/constants/badges";
import BadgeIcon from "../../BadgeIcon/BadgeIcon";

interface HighlightBadgeProps {
  type: string;
  level: number;
  selected?: boolean;
}

const HighlightBadge = ({ level, type, selected }: HighlightBadgeProps) => {
  const widthAndHeight = level === 1 ? 61 : 73;
  const badge = BADGE_DATA.find((badges) => badges.type === type)?.badges.find(
    (badge) => badge.level === level,
  );

  return (
    <div
      className={`flex flex-col items-center gap-1 px-5 pb-3 pt-1 border-2 rounded-lg bg-primary-50 ${selected ? "border-primary-450" : "border-primary-200"}`}
    >
      <div className="w-[73px]">
        <BadgeIcon
          src={badge?.icon ?? ""}
          alt={badge?.title ?? ""}
          size="md"
          width={widthAndHeight}
          height={widthAndHeight}
        />
      </div>
      <span className="text-semibold-14 text-blue-300">레벨 {level}</span>
      <h4 className="text-semibold-14 text-gray-700">{badge?.title}</h4>
    </div>
  );
};

export default HighlightBadge;
