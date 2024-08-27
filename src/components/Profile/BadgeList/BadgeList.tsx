import HighlightBadge from "@/components/MyPage/Profile/HighlightBadge/HighlightBadge";

import { BADGE_DATA } from "@/constants/badges";

import type { UpdateProfileFormType } from "@/types/userInfo";

interface BadgeListProps {
  isEdit?: boolean;
  selected?: string;
  handleClick?: UpdateProfileFormType;
}

const BadgeList = ({ isEdit, selected, handleClick }: BadgeListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <p className="text-bold-18">{isEdit ? "대표 뱃지 설정" : "하이라이트 뱃지"}</p>

      <div className="flex flex-nowrap gap-4 overflow-x-scroll hidden-scrollbar">
        {/* TODO: 뱃지 달성 조건 확립 후 달성 기준에 따른 레벨 적용 */}
        {BADGE_DATA.map((badge) => (
          <HighlightBadge
            key={badge.type}
            type={badge.type}
            level={3}
            selected={selected === badge.type}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgeList;
