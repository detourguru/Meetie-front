"use client";

import { useRouter } from "next/navigation";

import Header from "@/components/common/Header/Header";

const AbilityHeader = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Header>
      <Header.LeftButton handleButtonClick={handleClick} />
      <Header.Title hasButton>내 능력 현황</Header.Title>
      <Header.RightButton icon="/svg/ic-header-question.svg" />
    </Header>
  );
};

export default AbilityHeader;
