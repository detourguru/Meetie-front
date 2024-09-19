import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import AchieveProgressBar from "@/components/MyPage/Ability/AchieveProgressBar/AchieveProgressBar";
import BadgeIcon from "@/components/MyPage/BadgeIcon/BadgeIcon";

import type { BadgeType } from "@/types/badge";

interface BadgeSheetProps {
  isOpen: boolean;
  selectedBadgeType: string;
  title: string;
  description: string;
  selectedBadge?: BadgeType;
  onInteractOutside?: () => void;
}

const ICON_WIDTH = 140;
const ICON_HEIGHT = 160;

const BadgeSheet = ({
  isOpen,
  selectedBadgeType,
  title,
  description,
  selectedBadge,
  onInteractOutside,
}: BadgeSheetProps) => {
  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8 px-1 h-[90%] overflow-scroll hidden-scrollbar"
        onInteractOutside={() => {
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center py-[14px] sticky top-0 bg-white">
          <div className="w-[34px] h-[5px] rounded-[2.5px] bg-[#BFBFC1]" />
        </SheetHeader>

        <div className="flex flex-col gap-6 mx-8 pb-5 pt-6">
          <div className="flex flex-col items-center gap-6">
            <header className="text-medium-16 text-gray-500">{selectedBadgeType} 뱃지</header>
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-bold-24 text-gray-400">{title}</h1>
              <p className="text-regular-14 whitespace-pre-wrap text-center text-blue-300">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-white px-9 py-5">
            <div className="flex flex-col items-center gap-4">
              <BadgeIcon
                src={selectedBadge?.icon ?? ""}
                alt={selectedBadge?.title ?? ""}
                size="xl"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              />
              <div className="flex flex-col gap-2 items-center">
                <div className="p-1 border border-primary-500 rounded-lg">
                  <span className="text-medium-14 text-primary-500">
                    레벨 {selectedBadge && selectedBadge.level}
                  </span>
                </div>
                <h1 className="text-bold-20 text-gray-600">
                  {selectedBadge && selectedBadge.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-[13px]">
              <article className="flex flex-col gap-1.5">
                <header className="text-semibold-14 text-gray-600">500XP 모으기</header>
                <AchieveProgressBar total={500} achievedCount={300} />
              </article>
              <article className="flex flex-col gap-1.5">
                <header className="text-semibold-14 text-gray-600">피드백 50회 하기</header>
                <AchieveProgressBar total={50} achievedCount={20} />
              </article>
              <article className="flex flex-col gap-1.5">
                <header className="text-semibold-14 text-gray-600">방장 5회 달성</header>
                <AchieveProgressBar total={5} achievedCount={5} />
              </article>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default BadgeSheet;
