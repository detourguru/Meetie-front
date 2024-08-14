"use client";

import { useState } from "react";
import type { BadgeType, BadgesType } from "@/types/badge";
import BadgeDrawer from "../BadgeDrawer/BadgeDrawer";
import BadgeIcon from "../../BadgeIcon/BadgeIcon";

interface BadgeAreaProps {
  badges: BadgesType;
}

const ICON_SIZE = [70, 88, 95];

const BadgeArea = ({ badges }: BadgeAreaProps) => {
  const [selectedBadge, setselectedBadge] = useState<undefined | BadgeType>();

  const handleClick = (badge: BadgeType) => {
    setselectedBadge(badge);
  };

  const handleClose = () => {
    setselectedBadge(undefined);
  };

  return (
    <>
      <section className="flex flex-col mx-5 mt-8 gap-4">
        <div className="flex gap-1 items-center">
          <header className="text-medium-16 text-gray-500">{badges.type} 뱃지</header>
          {/* TODO: svg 아이콘으로 변경 예정 */}
          <img src="" alt="badge" width={16} height={16} />
        </div>

        <div className="flex justify-between bg-white">
          {badges.badges.map((badge) => (
            <article
              className="flex flex-col gap-2.5 items-center mt-auto first:mr-auto last:ml-auto"
              onClick={() => handleClick(badge)}
            >
              <BadgeIcon
                src={badge.icon}
                alt={badge.title}
                size="lg"
                width={ICON_SIZE[badge.level - 1]}
                height={ICON_SIZE[badge.level - 1]}
              />
              <p className="text-medium-14 text-gray-300">{badge.title}</p>
            </article>
          ))}
        </div>
      </section>

      <BadgeDrawer
        selectedBadge={selectedBadge}
        selectedBadgeType={badges.type}
        closeDrawer={handleClose}
      />
    </>
  );
};

export default BadgeArea;
