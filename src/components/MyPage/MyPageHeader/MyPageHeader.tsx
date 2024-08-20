"use client";

import { useRouter } from "next/navigation";

import Header from "@/components/common/Header/Header";

interface HeaderProps {
  title: string;
  infoIcon?: string;
}

const MyPageHeader = ({ title, infoIcon }: HeaderProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Header>
      <Header.LeftButton handleButtonClick={handleClick} />
      <Header.Title hasButton>{title}</Header.Title>
      {infoIcon && <Header.RightButton icon={infoIcon} />}
    </Header>
  );
};

export default MyPageHeader;
