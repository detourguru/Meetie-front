"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import Header from "@/components/common/Header/Header";

import { PATH } from "@/constants/path";

import { useOverlay } from "@/hooks/common/useOverlay";

interface PostHeaderProps {
  isOwner: boolean;
}

const PostHeader = ({ isOwner }: PostHeaderProps) => {
  const router = useRouter();
  const { id } = useParams();

  const { isOpen, handleToggle } = useOverlay();

  return (
    <Header>
      <Header.LeftButton handleButtonClick={() => router.back()} />
      {isOwner && (
        <Header.RightButton icon="/svg/ic-header-more.svg" handleButtonClick={handleToggle} />
      )}
      {isOwner && isOpen && (
        <div className="flex flex-col absolute -bottom-14 right-1 rounded-lg border border-gray-100 overflow-hidden cursor-pointer divide-y divide-gray-100">
          <Link href={PATH.COMMUNITY_EDIT(Number(id))} className="px-6 py-0.5 bg-white">
            수정
          </Link>
          <div className="px-6 py-0.5 bg-red-100">삭제</div>
        </div>
      )}
    </Header>
  );
};

export default PostHeader;
