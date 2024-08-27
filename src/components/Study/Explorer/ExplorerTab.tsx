"use client";
import Image from "next/image";

import { useState } from "react";

import CheckBox from "@/components/Study/CheckBox";
import FilterSheet from "@/components/Study/Explorer/FilterSheet";
import MemberList from "@/components/Study/Member/MemberList";
import PageConter from "@/components/Study/PageCounter";
import HashTag from "@/components/Study/StudyRoomList/HashTag";

import { Tabs, TabsList, TabsTrigger } from "@/components/common/Tab/Tab";

import { useOverlay } from "@/hooks/common/useOverlay";

const ExplorerTab = () => {
  const [currentTab, setCurrentTab] = useState("study");
  const { isOpen, handleOpen, handleClose } = useOverlay();

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
              <HashTag className="border-primary-500 text-primary-500">전체</HashTag>
              <HashTag className="border-gray-100 text-[#82829B]">#IT</HashTag>
              <HashTag className="border-gray-100 text-[#82829B]">#디자이너</HashTag>
              <HashTag className="border-gray-100 text-[#82829B]">#피그마</HashTag>
              <HashTag className="border-gray-100 text-[#82829B]">3-5</HashTag>
              <HashTag className="border-gray-100 text-[#82829B]">#UXUI</HashTag>
            </div>
            <div className="m-1 w-6 h-6 text-gray-500" onClick={handleOpen}>
              <Image src="/svg/ic-filter.svg" alt="icon" width={24} height={24} />
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-medium-12">총 2,001건</span>
            <div className="flex justify-evenly">
              <span className="flex justify-evenly text-regular-12 mr-4">
                최신 순
                <Image src="/svg/ic-down-arrow.svg" alt="icon" width={17} height={17} />
              </span>
              <span className="flex justify-evenly text-regular-12">
                등록일 전체
                <Image src="/svg/ic-down-arrow.svg" alt="icon" width={17} height={17} />
              </span>
            </div>
          </div>
          <div className="-mr-4 -ml-4 mb-4 bg-[#F2F2F2] h-2"></div>
          <div>
            <div className="flex justify-between mb-[27px]">
              <CheckBox>모집중만 보기</CheckBox>
              <PageConter current={1} total={6} />
            </div>
            {/* <StudyCard /> */}
          </div>
          <div className="-mr-4 -ml-4 mb-4 bg-[#F2F2F2] h-2"></div>
          <div className="flex justify-between mb-[27px]">
            <h1 className="text-bold-18">
              서희님과 비슷한 사용자가
              <br />
              방금 지원했어요
            </h1>
            <PageConter current={1} total={6} />
          </div>
          {/* <StudyCard /> */}
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
            <div className="p-4 flex justify-end">
              <PageConter current={1} total={4} />
            </div>
            <MemberList />
          </div>
        </div>
      )}
      <FilterSheet isOpen={isOpen} onInteractOutside={handleClose} />
    </>
  );
};

export default ExplorerTab;
