import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";
import AchieveProgressBar from "@/components/MyPage/Ability/AchieveProgressBar/AchieveProgressBar";
import BadgeIcon from "@/components/MyPage/BadgeIcon/BadgeIcon";

import { CONDITIONS } from "@/constants/badges";

import type { BadgeType } from "@/types/badge";

interface BadgeSheetProps {
  isOpen: boolean;
  selectedBadgeType: string;
  title: string;
  description: string;
  conditions: string[];
  acheived: boolean;
  selectedBadge: BadgeType;
  onInteractOutside?: () => void;
  getCondition: (type: string) => number;
}

const ICON_WIDTH = 140;
const ICON_HEIGHT = 160;

const BadgeSheet = ({
  isOpen,
  selectedBadgeType,
  title,
  description,
  conditions,
  acheived,
  selectedBadge,
  onInteractOutside,
  getCondition,
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
                src={selectedBadge.icon ?? ""}
                alt={selectedBadge.title ?? ""}
                size="xl"
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
                variant={acheived ? "default" : "tertiary"}
              />
              <div className="flex flex-col gap-2 items-center">
                <div className="p-1 border border-primary-500 rounded-lg">
                  <span className="text-medium-14 text-primary-500">
                    레벨 {selectedBadge.level}
                  </span>
                </div>
                <h1 className="text-bold-20 text-gray-600">{selectedBadge.title}</h1>
              </div>
            </div>

            <div className="flex flex-col gap-[13px]">
              {selectedBadge &&
                conditions.map((condition, index) => {
                  const achievedCount = getCondition(condition);
                  const totalCount = selectedBadge.conditions[condition];
                  return (
                    <article
                      className="flex flex-col gap-1.5"
                      key={`${selectedBadgeType}_${index}`}
                    >
                      <header className="text-semibold-14 text-gray-600">
                        {CONDITIONS[condition](totalCount)}
                      </header>
                      <AchieveProgressBar total={totalCount} achievedCount={achievedCount} />
                    </article>
                  );
                })}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default BadgeSheet;
