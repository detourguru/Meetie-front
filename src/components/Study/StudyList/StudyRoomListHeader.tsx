"use client";

import { useState } from "react";

import Header from "@/components/common/Header/Header";

const StudyRoomListHeader = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleButtonClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="relative">
      <Header>
        <Header.Title>스터디룸</Header.Title>
        <Header.RightButton
          handleButtonClick={handleButtonClick}
          icon="/svg/ic-header-question.svg"
        />
        <span
          className={`mt-16 rounded bg-gray-500 p-2 text-regular-14 text-white whitespace-nowrap ${showTooltip ? "" : "hidden"}`}
        >
          원하는 스터디룸을 찾을 수 있어요!
        </span>
      </Header>
    </div>
  );
};

export default StudyRoomListHeader;
