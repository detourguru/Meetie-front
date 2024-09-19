"use client";

import Divider from "@/components/common/Divider/Divider";
import Filter from "@/components/common/Filter/Filter";
import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";
import PostListSkeleton from "@/components/CommunityPost/List/PostList/PostListSkeleton";

import { POSITION_DATA, SORT_OPTION_DATA, POSTDATE_OPTION_DATA } from "@/constants/community";

import type { GetCommunityListResponseType } from "@/types/community";
import type { FilterSelectedType, UpdateFilterSelectedTypeHandlerType } from "@/types/filter";

interface PostListProps {
  communityListData: GetCommunityListResponseType;
  filterOption: FilterSelectedType;
  handleClickTag: (tag?: string | undefined) => string[];
  updateFilterOption: UpdateFilterSelectedTypeHandlerType;
  handleClick: (id: number) => void;
  isFetching: boolean;
}

const PostList = ({
  communityListData,
  filterOption,
  handleClickTag,
  updateFilterOption,
  handleClick,
  isFetching,
}: PostListProps) => {
  if (isFetching) {
    return <PostListSkeleton />;
  }

  return (
    <div className="pb-[120px]">
      <div className="mt-8">
        <div className="flex flex-col gap-5 bg-white z-10 mb-5">
          <div className="flex flex-col gap-2 mx-4">
            <div className="flex justify-between items-center">
              <h1 className="text-bold-18 text-gray-600">주제별 게시글</h1>
              {/* <div className="flex items-baseline">
                <button className="text-regular-14 text-[#82829B] self-start">더보기</button>
                <Image src="/svg/ic-arrow-right.svg" alt="more" width={20} height={20} />
              </div> */}
            </div>
            <p className="text-regular-14 text-[#82829B]">
              서비스 주제에 따른 게시글을 확인해보세요!
            </p>
          </div>

          <Filter>
            <Filter.FilterTag>
              <Filter.FilterTagSelect
                tags={POSITION_DATA}
                selected={filterOption.tags}
                handleClick={(tag: string) => updateFilterOption("tags", handleClickTag(tag))}
                handleClickTotal={() => updateFilterOption("tags", handleClickTag())}
              />
            </Filter.FilterTag>

            <Filter.FilterOption totalCount={communityListData.data.length}>
              <Filter.FilterOptionSelect
                options={SORT_OPTION_DATA}
                name="sort"
                value={filterOption.sort}
                onChange={(e) => updateFilterOption("sort", e.target.value)}
              />

              <Filter.FilterOptionSelect
                options={POSTDATE_OPTION_DATA}
                name="date"
                value={filterOption.date}
                onChange={(e) => updateFilterOption("date", e.target.value)}
              />
            </Filter.FilterOption>
          </Filter>

          <Divider className="bg-[#F1F2F6]" />
        </div>

        <ul className="flex flex-col gap-4 px-4">
          {communityListData.data.map((post) => (
            <PostCard
              key={`community_post_${post.id}`}
              className="border border-[#EAEAEA]"
              post={post}
              onClick={() => handleClick(post.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
