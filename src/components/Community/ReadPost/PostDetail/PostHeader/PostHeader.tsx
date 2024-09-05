"use client";

import { useRouter } from "next/navigation";

import Header from "@/components/common/Header/Header";

interface PostHeaderProps {
  isOwner: boolean;
}

const PostHeader = ({ isOwner }: PostHeaderProps) => {
  const router = useRouter();

  return (
    <Header>
      <Header.LeftButton handleButtonClick={() => router.back()} />
      {isOwner && <Header.RightButton icon="/svg/ic-header-more.svg" />}
    </Header>
  );
};

export default PostHeader;
