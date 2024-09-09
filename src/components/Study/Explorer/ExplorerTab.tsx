"use client";
import Image from "next/image";

import { useState } from "react";

import Filter from "@/components/common/Filter/Filter";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/Tab/Tab";
import FilterSheet from "@/components/Study/Explorer/FilterSheet";
import MemberList from "@/components/Study/Member/MemberList";
import HashTag from "@/components/Study/StudyRoomList/HashTag";
import StudyCard from "@/components/Study/StudyRoomList/StudyCard";

import { CREATED_AT_OPTION_DATA, SORT_OPTION_DATA } from "@/constants/study";

import { useStudyListFilter } from "@/hooks/api/study/useStudyListFilter";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";
import { useOverlay } from "@/hooks/common/useOverlay";

const ExplorerTab = () => {
  const [currentTab, setCurrentTab] = useState("study");
  const { isOpen, handleOpen, handleClose } = useOverlay();

  // 이게 계속 call 되면서 데이터가 정상적으로 조회되지 않음
  const { userId } = useUserInformationQuery();

  const { data, filterOption, handleClickTag, updateFilterOption } = useStudyListFilter({});
  const TAGS_DATA = data.data
    ? Array.from(new Set(data.data.map((study) => study.tagList).flat()))
    : [];

  return (
    <>
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
        <div className="relative p-4">
          <div className="flex justify-between mb-4">
            <div className="text-nowrap overflow-x-auto no-scrollbar">
              <div className="relative -mx-4">
                <Filter>
                  <Filter.FilterTag>
                    <Filter.FilterTagSelect
                      hashtag
                      tags={TAGS_DATA}
                      selected={filterOption.tagList ?? []}
                      handleClick={(tag: string) =>
                        updateFilterOption("tagList", handleClickTag(tag))
                      }
                      handleClickTotal={() => updateFilterOption("tagList", handleClickTag())}
                    />
                  </Filter.FilterTag>

                  <Filter.FilterOption totalCount={data.data ? data.data.length : 0}>
                    <Filter.FilterOptionSelect
                      options={SORT_OPTION_DATA}
                      name="order"
                      value={filterOption.order}
                      onChange={(e) => updateFilterOption("order", e.target.value)}
                    />

                    <Filter.FilterOptionSelect
                      options={CREATED_AT_OPTION_DATA}
                      name="date"
                      value={filterOption.date}
                      onChange={(e) => updateFilterOption("date", e.target.value)}
                    />
                  </Filter.FilterOption>
                </Filter>
              </div>
            </div>
            <div className="m-1 w-6 h-6 text-gray-500" onClick={handleOpen}>
              <Image src="/svg/ic-filter.svg" alt="icon" width={24} height={24} />
            </div>
          </div>
          <div className="-mr-4 -ml-4 mb-4 bg-[#F2F2F2] h-2"></div>
          <div>
            <div className="flex justify-between mb-[27px]">
              <h1 className="text-bold-18">
                서희님과 비슷한 사용자가
                <br />
                방금 지원했어요
              </h1>
            </div>
            {/* TODO: data 없을때 보여줄 UI 필요 */}
            {data.data &&
              data.data.map((studyData) => (
                <StudyCard userId={userId} studyData={studyData} key={studyData.id} />
              ))}
          </div>
          <div className="-mr-4 -ml-4 mb-4 bg-[#F2F2F2] h-2"></div>
        </div>
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
      <FilterSheet isOpen={isOpen} onInteractOutside={handleClose} />
    </>
  );
};

export default ExplorerTab;
