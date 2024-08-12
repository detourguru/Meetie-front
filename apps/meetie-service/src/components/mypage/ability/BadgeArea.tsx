"use client";

import { useState } from "react";
import BadgeDrawer from "./BadgeDrawer";
import type { TBadge, TBadges } from "@/types/badge";

interface IBadgeAreaProps {
  badges: TBadges;
}

const BadgeArea = ({ badges }: IBadgeAreaProps) => {
  const [selectedBadge, setselectedBadge] = useState<undefined | TBadge>();

  const handleClick = (badge: TBadge) => {
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

        <div className="grid grid-cols-3">
          {badges.badges.map((badge) => (
            <article
              className="flex flex-col gap-2.5 items-center mt-auto first:mr-auto last:ml-auto"
              onClick={() => handleClick(badge)}
            >
              {/* TODO: svg 아이콘으로 변경 예정 */}
              <img src="" alt="newbie" width={69.63} height={69.63} />
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
