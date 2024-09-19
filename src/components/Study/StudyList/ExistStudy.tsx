"use client";

import Image from "next/image";

import { Suspense } from "react";

import StudyListSheet from "@/components/StudyRoom/StudyListSheet/StudyListSheet";

import { useStudyRoomQuery } from "@/hooks/api/study-room/useStudyRoomQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";
import { useOverlay } from "@/hooks/common/useOverlay";

import { generateDday } from "@/utils/date";

const ExistStudy = () => {
  const { data: userData } = useUserInfoQuery();
  // 첫번째 스터디 가져옴
  const { data: studyData } = useStudyRoomQuery(String(userData.data.studyList[0]));
  const { isOpen, handleOpen, handleClose } = useOverlay();
  return (
    <>
      {studyData && studyData.data ? (
        <section className="pb-4">
          <div className="flex justify-between mt-4">
            <h1 className="text-bold-18 mb-2">진행중인 스터디</h1>
            <div className="flex justify-end mb-2">
              <p className="bg-primary-400 text-regular-12 text-white px-[10px] py-[3px] rounded-l-lg border border-primary-400">
                진행중 {userData.data.studyList.length}
              </p>
              <p className="bg-white text-regular-12 text-blue-300 px-[10px] py-[3px] rounded-r-lg border border-primary-400">
                진행완료 0
              </p>
            </div>
          </div>
          <div
            className="relative flex mt-3 px-4 py-5 bg-white border border-[#E9E9E9] border-inset rounded-lg drop-shadow-sm gap-4"
            onClick={handleOpen}
          >
            <div className="flex justify-center items-center bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
              <Image src="/svg/ic-calendar-vertical.svg" alt="icon" width={18} height={19} />
            </div>

            <div>
              <p className="text-regular-16">{studyData.data.title}</p>
              <span className="text-regular-12 text-[#82829B]">
                멤버 {studyData.data.memberList.length}명
              </span>
            </div>
            <div className="absolute flex items-center right-4 bottom-4 border border-primary-500 rounded-[10px] px-1">
              <span className="text-regular-12 text-primary-500">
                {generateDday(studyData.data.endDate)}
              </span>
            </div>
          </div>

          <Suspense>
            <StudyListSheet
              isOpen={isOpen}
              onInteractOutside={handleClose}
              studyList={userData.data.studyList}
              studyRoomId={String(userData.data.user_id)}
            />
          </Suspense>
        </section>
      ) : (
        <>
          <div className="p-4">
            <h1 className="text-bold-18 mb-2">
              아직 스터디가
              <br />
              존재하지 않아요!
            </h1>
            <h2 className="text-medium-14 text-gray-200">#원하는 스터디를 탐색해 볼까요?</h2>
          </div>
        </>
      )}
    </>
  );
};

export default ExistStudy;
