"use client";

import Image from "next/image";

import { useState } from "react";

import BadgeIcon from "../../BadgeIcon/BadgeIcon";
import BadgeSheet from "../BadgeSheet/BadgeSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { BadgeType, BadgesType } from "@/types/badge";

interface BadgeAreaProps {
  badges: BadgesType;
}

const ICON_WIDTH = [70, 89, 95];
const ICON_HEIGHT = [80, 85, 95];

const BadgeArea = ({ badges }: BadgeAreaProps) => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const [selectedBadge, setselectedBadge] = useState<undefined | BadgeType>();

  const handleClick = (badge: BadgeType) => {
    setselectedBadge(badge);
    handleOpen();
  };

  return (
    <>
      <section className="flex flex-col mx-5 gap-4">
        <div className="flex gap-1 items-center">
          <header className="text-medium-16 text-gray-500">{badges.type} 뱃지</header>
          <Image
            src="/svg/ic-verified.svg"
            alt="verified"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </div>

        <div className="flex justify-between bg-white">
          {badges.badges.map((badge, index) => (
            <article
              key={`${badges.type}/${index}`}
              className="flex flex-col gap-2.5 items-center mt-auto first:mr-auto last:ml-auto"
              onClick={() => handleClick(badge)}
            >
              <BadgeIcon
                src={badge.icon}
                alt={badge.title}
                size="lg"
                width={ICON_WIDTH[badge.level - 1]}
                height={ICON_HEIGHT[badge.level - 1]}
              />
              <p className="text-medium-14 text-gray-300">{badge.title}</p>
            </article>
          ))}
        </div>
      </section>

      <BadgeSheet
        isOpen={isOpen}
        selectedBadge={selectedBadge}
        selectedBadgeType={badges.type}
        onInteractOutside={handleClose}
      />
    </>
  );
};

export default BadgeArea;
