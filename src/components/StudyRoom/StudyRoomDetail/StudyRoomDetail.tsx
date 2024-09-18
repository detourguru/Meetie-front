"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useState, Suspense } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/common/Tab/Tab";
import ChatTab from "@/components/StudyRoom/Chat/ChatTab";
import ScheduleTab from "@/components/StudyRoom/ScheduleTab/ScheduleTab";
import StudyListSheet from "@/components/StudyRoom/StudyListSheet/StudyListSheet";

import { TODAY, WEEK_DAY } from "@/constants/common";

import { useStudyRoomQuery } from "@/hooks/api/study-room/useStudyRoomQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";
import { useOverlay } from "@/hooks/common/useOverlay";

import { generateDday } from "@/utils/date";

import type { DateType } from "@/types/common";

const StudyRoomDetail = () => {
  const params = useParams();

  const { data } = useStudyRoomQuery(String(params.id));
  const { data: userData } = useUserInfoQuery();

  const { isOpen, handleOpen, handleClose } = useOverlay();

  const isOwner = userData.data.user_id === data.data.owner_id;

  const [selectedDate, setSelectedDate] = useState<DateType>({
    year: TODAY.year,
    month: TODAY.month,
    date: TODAY.date,
    day: WEEK_DAY[TODAY.day],
  });

  const handleSelectedDate = (date: DateType) => {
    setSelectedDate(date);
  };

  return (
    <main>
      <section className="bg-[#EBE9F5] px-4 pt-14 pb-4">
        <div className="flex justify-end mt-4">
          <p className="bg-primary-400 text-regular-12 text-white px-[10px] py-[3px] rounded-l-lg border border-primary-400">
            진행중 {userData.data.studyList.length}
          </p>
          <p className="bg-white text-regular-12 text-blue-300 px-[10px] py-[3px] rounded-r-lg border border-primary-400">
            진행완료 0
          </p>
        </div>

        {/* 사용시 컴포넌트화 */}
        <div
          className="relative flex mt-3 px-4 py-5 bg-white border border-[#E9E9E9] border-inset rounded-lg drop-shadow-sm gap-4"
          onClick={handleOpen}
        >
          <div className="flex justify-center items-center bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
            <Image src="/svg/ic-calendar-vertical.svg" alt="icon" width={18} height={19} />
          </div>

          <div>
            <p className="text-regular-16">{data.data.title}</p>
            <span className="text-regular-12 text-[#82829B]">
              멤버 {data.data.memberList.length}명
            </span>
          </div>
          <div className="absolute flex items-center right-4 bottom-4 border border-primary-500 rounded-[10px] px-1">
            <span className="text-regular-12 text-primary-500">
              {generateDday(data.data.endDate)}
            </span>
          </div>
        </div>
      </section>

      <Tabs defaultValue="schedule">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="schedule">일정</TabsTrigger>
          <TabsTrigger value="chat">채팅</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <ScheduleTab
            selectedDate={selectedDate}
            handleSelectedDate={handleSelectedDate}
            studyRoomId={String(params.id)}
            isOwner={isOwner}
          />
        </TabsContent>
        <TabsContent value="chat">
          <ChatTab studyRoomId={String(params.id)} />
        </TabsContent>
      </Tabs>

      <Suspense>
        <StudyListSheet
          isOpen={isOpen}
          onInteractOutside={handleClose}
          studyList={userData.data.studyList}
          studyRoomId={String(params.id)}
        />
      </Suspense>
    </main>
  );
};

export default StudyRoomDetail;
