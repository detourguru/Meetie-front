import HighlightBadge from "@/components/MyPage/Profile/HighlightBadge/HighlightBadge";

import { BADGE_DATA } from "@/constants/badges";

import type { BadgeLevelType } from "@/types/badge";
import type { UpdateProfileFormType } from "@/types/userInfo";

interface BadgeListProps {
  badges: BadgeLevelType;
  isEdit?: boolean;
  selected?: string;
  handleClick?: UpdateProfileFormType;
}

const BadgeList = ({ badges, isEdit, selected, handleClick }: BadgeListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <p className="text-bold-18">{isEdit ? "대표 뱃지 설정" : "하이라이트 뱃지"}</p>

      <div className="flex flex-nowrap gap-4 overflow-x-scroll hidden-scrollbar">
        {BADGE_DATA.map((badge) => (
          <HighlightBadge
            key={badge.type}
            type={badge.type}
            level={badges[badge.type]}
            selected={selected === badge.type}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeList;
