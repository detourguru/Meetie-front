"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import PostList from "@/components/CommunityPost/List/PostList/PostList";
import Recommended from "@/components/CommunityPost/List/Recommended/Recommended";
import SearchSheet from "@/components/CommunityPost/List/SearchSheet/SearchSheet";

import { PATH } from "@/constants/path";

import { usePatchVisitCommunityMutation } from "@/hooks/api/community/usePatchVisitCommunityMutation";
import { useOverlay } from "@/hooks/common/useOverlay";
import { useCommunityFilter } from "@/hooks/community/useCommunityFilter";

const CommunityBody = () => {
  const router = useRouter();

  const { communityListData, filterOption, handleClickTag, updateFilterOption, isFetching } =
    useCommunityFilter({});
  const { mutate: patchVisitCommunityMutation } = usePatchVisitCommunityMutation();

  const { isOpen, handleClose, handleOpen } = useOverlay();

  const handleClickPostCard = (id: number) => {
    patchVisitCommunityMutation(id, {
      onSuccess() {
        router.push(PATH.COMMUNITY(id));
      },
    });
  };

  return (
    <>
      {/* TODO: 공통 컴포넌트 제작 */}
      <div className="px-4 pt-16 pb-1 bg-white z-20" onClick={handleOpen}>
        <div className="flex gap-3 bg-[#F1F3F5] rounded-lg px-3.5 py-3">
          <Image src="/svg/ic-community-search.svg" alt="search" width={24} height={24} />
          <input
            id="search"
            name="search"
            value={filterOption.search}
            readOnly
            className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD] w-full"
            placeholder="관심있는 주제를 검색해보세요"
            data-testid="searchSheetOpen"
          />
        </div>
      </div>

      <Recommended handleClick={handleClickPostCard} />

      <PostList
        communityListData={communityListData}
        filterOption={filterOption}
        handleClickTag={handleClickTag}
        updateFilterOption={updateFilterOption}
        handleClick={handleClickPostCard}
        isFetching={isFetching}
      />

      <SearchSheet
        isOpen={isOpen}
        searchValue={filterOption.search}
        handleClose={handleClose}
        updateFilterOption={updateFilterOption}
      />
    </>
  );
};

export default CommunityBody;
