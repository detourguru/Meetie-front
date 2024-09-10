"use client";

import Image from "next/image";

import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/common/Tab/Tab";
import SearchSheet from "@/components/CommunityPost/List/SearchSheet/SearchSheet";
import ToggleSwitch from "@/components/Study/Explorer//ToggleSwitch";
import StudyFilteredList from "@/components/Study/Explorer/StudyFilteredList";
import MemberList from "@/components/Study/Member/MemberList";
import HashTag from "@/components/Study/StudyRoomList/HashTag";

import { useStudyListFilter } from "@/hooks/api/study/useStudyListFilter";
import { useOverlay } from "@/hooks/common/useOverlay";

const ExplorerTab = () => {
  const [currentTab, setCurrentTab] = useState("study");
  const { isOpen, handleClose, handleOpen } = useOverlay();

  const { data, filterOption, handleClickTag, updateFilterOption } = useStudyListFilter({});

  return (
    <>
      <div className="px-4 pt-14 pb-1 sticky top-0 bg-white z-20" onClick={handleOpen}>
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
        <ToggleSwitch>원하는 스터디 알림 받기</ToggleSwitch>
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
        <StudyFilteredList
          data={data}
          filterOption={filterOption}
          handleClickTag={handleClickTag}
          updateFilterOption={updateFilterOption}
        />
      )}

      {currentTab === "member" && (
        <div className="relative p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <Image src="/svg/ic-refresh.svg" alt="icon" width={24} height={24} />
            </div>
            <div className="text-nowrap ml-2 overflow-x-auto no-scrollbar">
              <HashTag close={true} className="border-primary-500 text-primary-500">
                직무
              </HashTag>
              <HashTag close={true} className="border-primary-500 text-primary-500">
                스터디 목적
              </HashTag>
              <HashTag close={true} className="border-primary-500 text-primary-500">
                작업 스타일
              </HashTag>
              <HashTag close={true} className="border-primary-500 text-primary-500">
                스터디 기간
              </HashTag>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-medium-12">총 8명</span>
            <span className="flex justify-evenly text-regular-12 mr-1">
              인기순
              <Image src="/svg/ic-down-arrow.svg" alt="icon" width={14} height={14} />
            </span>
          </div>
          <div className="mx-4 bg-[#F5F5FF]">
            <div className="p-4 flex justify-end"></div>
            <MemberList />
          </div>
        </div>
      )}

      <SearchSheet
        isOpen={isOpen}
        searchValue={filterOption.search}
        handleClose={handleClose}
        updateFilterOption={updateFilterOption}
      />
    </>
  );
};

export default ExplorerTab;
