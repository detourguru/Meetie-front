"use client";

import Header from "@/components/common/Header/Header";

import { useGoBack } from "@/hooks/common/useGoBack";

const AbilityHeader = () => {
  const { handleGoBack } = useGoBack();

  return (
    <Header>
      <Header.LeftButton handleButtonClick={handleGoBack} />
      <Header.Title hasButton>내 능력 현황</Header.Title>
      <Header.RightButton icon="/svg/ic-header-question.svg" />
    </Header>
  );
};

export default AbilityHeader;
