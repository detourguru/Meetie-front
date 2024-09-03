import Image from "next/image";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import CreatePostButton from "@/components/CommunityPost/List/CreatePostButton/CreatePostButton";
import PostList from "@/components/CommunityPost/List/PostList/PostList";
import Recommended from "@/components/CommunityPost/List/Recommended/Recommended";

export default function CommunityPostListPage() {
  return (
    <>
      <Header>
        <Header.Title>커뮤니티</Header.Title>
        <Header.RightButton icon="/svg/ic-header-question.svg" />
      </Header>

      {/* TODO: 공통 컴포넌트 제작 */}
      <div className="flex gap-3 mx-4 mt-14 bg-[#F1F3F5] rounded-lg px-3.5 py-3">
        <Image src="/svg/ic-community-search.svg" alt="search" width={24} height={24} />
        <input
          className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD] w-full"
          placeholder="관심있는 주제를 검색해보세요"
          maxLength={20}
        />
      </div>

      <Recommended />

      <PostList />

      <CreatePostButton />

      <Gnb />
    </>
  );
}
