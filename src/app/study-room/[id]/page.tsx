"use client";
import Image from "next/image";

import type { ReactNode } from "react";
import { useState } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
// import CalendarTab from "@/components/StudyRoom/CalendarTab/CalendarTab";
import { Tabs, TabsList, TabsTrigger } from "@/components/common/Tab/Tab";
import TaskTab from "@/components/StudyRoom/TaskTab/TaskTab";

interface TabType {
  id: string;
  label: string;
  content: ReactNode;
}
const tabs: TabType[] = [
  { id: "calTab", label: "캘린더", content: <CalendarTab /> },
  { id: "taskTab", label: "과제", content: <TaskTab /> },
  { id: "chatTab", label: "채팅", content: <></> },
];
export default function StudyRoom() {
  const [activeTab, setActiveTab] = useState("calTab");
  const activeTabClassName = "border-b-2 border-primary-500 text-primary-500";
  function handleTabClick(tabId: string) {
    setActiveTab(tabId);
  }
  return (
    <>
      <Header backgroundColor="bg-[#EBE9F5]">
        <Header.Title>스터디룸</Header.Title>
        <Header.RightButton icon="/svg/ic-header-plus.svg" />
      </Header>
      <main>
        <section className="bg-[#EBE9F5] px-4 pt-10 pb-4">
          <div className="flex justify-end">
            <p className="bg-[#8655FF] text-white p-[10px] py-[5px] text-regular-12 rounded-l-lg">
              진행중 3
            </p>
            <p className="bg-white px-[10px] py-[5px] border border-[#8655FF] rounded-r-lg text-regular-12 text-[#82829B]">
              진행완료
            </p>
          </div>
          <section className="relative flex mt-3 p-4 bg-white border border-[#E9E9E9] border-inset rounded-md drop-shadow-sm">
            <div className="w-[20px] h-10 flex justify-center items-center mr-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
              <Image src="/svg/ic-calendar-vertical.svg" alt="icon" width={18} height={19} />
            </div>
            <div>
              <p className="text-regular-16">피그마 정복하기🔥🔥</p>
              <span className="text-regular-12 text-[#82829B]">디자인 | 멤버 5</span>
            </div>
            <div className="absolute flex items-center right-4 bottom-4">
              <span className="text-regular-12 text-primary-500 border border-primary-500 rounded-[10px] px-1">
                D-30
              </span>
            </div>
          </section>
        </section>
        {/* tab */}
        <Tabs defaultValue="calendar">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calendar">캘린더</TabsTrigger>
            <TabsTrigger value="task">과제</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* <CalendarTab /> */}
        <TaskTab />
      </main>
      <Gnb />
    </>
  );
}
