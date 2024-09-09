"use client";

import Image from "next/image";

import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";

import { useCommunityRecommend } from "@/hooks/community/useCommunityRecommend";

interface RecommendedProps {
  handleClick: (id: number) => void;
}

const Recommended = ({ handleClick }: RecommendedProps) => {
  const { communityListData, scrollIndex, handleScroll, handleRefresh } = useCommunityRecommend();

  return (
    <div className="flex flex-col gap-4 my-8">
      <div className="flex justify-between items-center mx-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-bold-18 text-gray-600">💡 추천 게시글</h1>
          <p className="text-regular-14 text-[#82829B]">인기 게시글을 확인해보세요!</p>
        </div>
        <Image
          src="/svg/ic-community-refresh.svg"
          alt="refresh"
          width={40}
          height={40}
          onClick={handleRefresh}
        />
      </div>

      <div className="bg-[#E3E3FA] py-5 flex flex-col gap-4">
        {communityListData.data.length > 0 ? (
          <>
            <ul
              className="flex gap-3 overflow-scroll snap-x snap-mandatory px-4 hidden-scrollbar"
              onScroll={handleScroll}
            >
              {communityListData.data.map((post) => (
                <PostCard
                  key={`recommend_${post.id}`}
                  className="min-w-[343px] snap-normal snap-center"
                  post={post}
                  onClick={() => handleClick(post.id)}
                />
              ))}
            </ul>
            <div className="flex gap-1.5 justify-center">
              {Array.from({ length: communityListData.data.length }, (_, index) => (
                <div
                  className={`w-1 h-1 rounded-full ${scrollIndex === index ? "bg-primary-400" : "bg-gray-200"}`}
                  key={`button${index}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="min-w-[343px] rounded-lg mx-4 px-5 py-6 bg-white text-center">
            게시글이 존재하지 않습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommended;
