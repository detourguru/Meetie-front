"use client";

import Header from "@/components/common/Header/Header";

import { useOverlay } from "@/hooks/common/useOverlay";

const CommunityHeader = () => {
  const { isOpen, handleToggle } = useOverlay();

  return (
    <Header>
      <Header.Title>커뮤니티</Header.Title>
      <Header.RightButton icon="/svg/ic-header-question.svg" handleButtonClick={handleToggle} />

      {isOpen && (
        <span className="mt-16 rounded bg-gray-500 p-2 text-regular-14 text-white whitespace-nowrap">
          원하는 게시글을 찾을 수 있어요!
        </span>
      )}
    </Header>
  );
};

export default CommunityHeader;
