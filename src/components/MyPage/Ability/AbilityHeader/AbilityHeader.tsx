"use client";

import Header from "@/components/common/Header/Header";

import { useGoBack } from "@/hooks/common/useGoBack";
import { useOverlay } from "@/hooks/common/useOverlay";

const AbilityHeader = () => {
  const { handleGoBack } = useGoBack();

  const { isOpen, handleToggle } = useOverlay();

  return (
    <Header>
      <Header.LeftButton handleButtonClick={handleGoBack} />
      <Header.Title hasButton>내 능력 현황</Header.Title>
      <Header.RightButton icon="/svg/ic-header-question.svg" handleButtonClick={handleToggle} />

      {isOpen && (
        <span className="mt-16 rounded bg-gray-500 p-2 text-regular-14 text-white whitespace-nowrap absolute right-4">
          획득한 뱃지를 확인할 수 있어요!
        </span>
      )}
    </Header>
  );
};

export default AbilityHeader;
