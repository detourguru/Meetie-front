import HighlightBadge from "@/components/MyPage/Profile/HighlightBadge/HighlightBadge";
import { BADGE_DATA } from "@/constants/badges";

interface BadgeListProps {
  isEdit?: boolean;
  selected?: string;
  handleClick?: (badge: string) => void;
}

const BadgeList = ({ isEdit, selected, handleClick }: BadgeListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <p className="text-bold-18">{isEdit ? "대표 뱃지 설정" : "하이라이트 뱃지"}</p>

      <div className="flex flex-nowrap gap-4 overflow-x-scroll hidden-scrollbar">
        {/* 뱃지 클릭시 select 변경 기능 state로 구현 */}
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
