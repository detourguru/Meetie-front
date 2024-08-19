"use client";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import Badge from "../components/Badge";
import Filter from "../components/Filter";
import FilteringStudies from "../components/FilteringStudies";
import { useState } from "react";
import Image from "next/image";
import FilteringMembers from "../components/FilteringMembers";

function page() {
  const [activeTab, setActiveTab] = useState("study");
  const [filterActive, setFilterActive] = useState(false);
  const isCurrentTabDefault = activeTab === "study" ? true : false;

  function showSelectedTabHandler(tab: string) {
    setActiveTab(tab);
  }

  function toggleFilterAreaHandler() {
    setFilterActive(!filterActive);
  }

  return (
    <>
      <div className="relative">
        <div>
          <div className="relative p-4">
            <h1 className="text-bold-18 mb-[14px]">탐색하기</h1>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image src="/svg/ic-search.svg" alt="icon" width={20} height={20} />
              </div>
              <input
                type="search"
                className="mb-2 rounded-lg block w-full py-3 ps-10 text-regular-14 bg-gray-100"
                placeholder={`어떤 ${activeTab ? "스터디를" : "팀원을"} 찾고싶나요?`}
                required
              />
            </div>
            <ToggleSwitch>원하는 스터디 알림 받기</ToggleSwitch>
            <ul className="mb-2 text-center text-gray-500 text-semibold-16 flex items-center justify-evenly">
              <li
                className={`w-full ${isCurrentTabDefault ? "border-b-2 border-primary-500 text-gray-500" : "text-gray-200"}`}
              >
                <a
                  id="study"
                  onClick={(e) => showSelectedTabHandler(e.currentTarget.id)}
                  href="#"
                  className="inline-block py-4"
                >
                  스터디 찾기
                </a>
              </li>
              <li
                className={`w-full ${!isCurrentTabDefault ? "border-b-2 border-primary-500 text-gray-500" : "text-gray-200"}`}
              >
                <a
                  id="member"
                  onClick={(e) => showSelectedTabHandler(e.currentTarget.id)}
                  href="#"
                  className="inline-block p-4"
                >
                  팀원 찾기
                </a>
              </li>
            </ul>
          </div>
          {isCurrentTabDefault && (
            <div className="relative p-4">
              <div className="flex justify-between mb-4">
                <div className="text-nowrap overflow-x-auto no-scrollbar">
                  <Badge className="border-primary-500 text-primary-500">전체</Badge>
                  <Badge className="border-gray-100 text-[#82829B]">#IT</Badge>
                  <Badge className="border-gray-100 text-[#82829B]">#디자이너</Badge>
                  <Badge className="border-gray-100 text-[#82829B]">#피그마</Badge>
                  <Badge className="border-gray-100 text-[#82829B]">3-5</Badge>
                  <Badge className="border-gray-100 text-[#82829B]">#UXUI</Badge>
                </div>
                <div className="m-1 w-6 h-6 text-gray-500" onClick={toggleFilterAreaHandler}>
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
              <FilteringStudies>모집중만 보기</FilteringStudies>

              <div className="-mr-4 -ml-4 mb-4 bg-[#F2F2F2] h-2"></div>
              <div>
                <h1 className="text-bold-18">
                  서희님과 비슷한 사용자가
                  <br />
                  방금 지원했어요
                </h1>
                <FilteringStudies />
              </div>
            </div>
          )}
          {!isCurrentTabDefault && (
            <div className="relative p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <Image src="/svg/ic-refresh.svg" alt="icon" width={24} height={24} />
                </div>
                <div className="text-nowrap ml-2 overflow-x-auto no-scrollbar">
                  <Badge close={true} className="border-primary-500 text-primary-500">
                    직무
                  </Badge>
                  <Badge close={true} className="border-primary-500 text-primary-500">
                    스터디 목적
                  </Badge>
                  <Badge close={true} className="border-primary-500 text-primary-500">
                    작업 스타일
                  </Badge>
                  <Badge close={true} className="border-primary-500 text-primary-500">
                    스터디 기간
                  </Badge>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-medium-12">총 8명</span>
                <span className="flex justify-evenly text-regular-12 mr-1">
                  인기순
                  <Image src="/svg/ic-down-arrow.svg" alt="icon" width={14} height={14} />
                </span>
              </div>
              <div className="-ml-4 -mr-4 bg-[#F5F5FF]">
                <div className="p-4">
                  <FilteringMembers />
                </div>
              </div>
            </div>
          )}
        </div>
        <Filter className={filterActive ? "" : "hidden"}>
          <div>
            <h2 className="text-bold-18">필터</h2>
            <p className="text-regular-16">상세한 필터로 원하는 스터디를 찾아보세요!</p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label htmlFor="manufacturer" className="text-stone-600 text-sm font-medium">
                  검색어
                </label>
                <input
                  type="manufacturer"
                  id="manufacturer"
                  placeholder="검색어를 입력해주세요"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="date" className="text-stone-600 text-sm font-medium">
                  스터디 시작 일자
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="status" className="text-stone-600 text-sm font-medium">
                  카테고리
                </label>
                <select
                  id="status"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>개발</option>
                  <option>디자인</option>
                  <option>UIUX</option>
                </select>
              </div>
            </div>
            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">
                초기화
              </button>
              <button
                onClick={toggleFilterAreaHandler}
                className="active:scale-95 rounded-lg bg-primary-500 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              >
                적용
              </button>
            </div>
          </div>
        </Filter>
      </div>
    </>
  );
}
export default page;
