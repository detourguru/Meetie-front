"use client";

import Image from "next/image";

import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/common/Tab/Tab";
import SearchSheet from "@/components/CommunityPost/List/SearchSheet/SearchSheet";
import MemberFilteredList from "@/components/Study/Explorer/MemberFilteredList";
import StudyFilteredList from "@/components/Study/Explorer/StudyFilteredList";

import { useStudyListFilter } from "@/hooks/api/study/useStudyListFilter";
import { useOverlay } from "@/hooks/common/useOverlay";

const ExplorerTab = () => {
  const [currentTab, setCurrentTab] = useState("study");
  const { isOpen, handleClose, handleOpen } = useOverlay();

  const { data, filterOption, handleClickTag, updateFilterOption, isFetching } = useStudyListFilter(
    {},
  );

  return (
    <>
      <div className="px-4 pt-[72px] pb-1 sticky top-0 bg-white z-20" onClick={handleOpen}>
        <div className="flex gap-3 bg-[#F1F3F5] rounded-lg px-3.5 py-3 mb-2">
          <Image src="/svg/ic-community-search.svg" alt="search" width={24} height={24} />
          <input
            id="search"
            name="search"
            value={filterOption.search}
            readOnly
            className="outline-none bg-[#F1F3F5] text-regular-14 placeholder:text-[#ADB5BD] w-full"
            placeholder="관심있는 스터디나 팀원을 검색해보세요"
          />
        </div>
      </div>

      <Tabs defaultValue={currentTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="study" onClick={() => setCurrentTab("study")}>
            스터디 찾기
          </TabsTrigger>
          <TabsTrigger value="member" onClick={() => setCurrentTab("member")}>
            팀원 찾기
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {currentTab === "study" && (
        <>
          <StudyFilteredList
            data={data}
            filterOption={filterOption}
            handleClickTag={handleClickTag}
            updateFilterOption={updateFilterOption}
            isFetching={isFetching}
          />

          <SearchSheet
            isOpen={isOpen}
            searchValue={filterOption.search}
            handleClose={handleClose}
            updateFilterOption={updateFilterOption}
          />
        </>
      )}

      {currentTab === "member" && <MemberFilteredList />}
    </>
  );
};

export default ExplorerTab;
