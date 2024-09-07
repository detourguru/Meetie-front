"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Button from "@/components/common/Button/Button";
import StudyRoomProfile from "@/components/StudyRoom/StudyRoomComplete/StudyRoomProfile/StudyRoomProfile";

import { PATH } from "@/constants/path";

import { useStudyRoomCompleteQuery } from "@/hooks/api/study-room/useStudyRoomCompleteQuery";

const StudyRoomComplete = () => {
  const params = useParams();

  const { data } = useStudyRoomCompleteQuery(String(params.id));

  return (
    <main className="flex flex-col h-screen">
      <article className="flex flex-col items-center w-full h-full px-5">
        <div className="w-full pt-[54px]">
          <div className="mb-[20px]">
            <h1 className="text-semibold-24">멤버들이 모두 모여</h1>
            <h1 className="text-semibold-24">스터디룸이 생성되었어요 👏</h1>
          </div>

          <p className="text-regular-14 text-gray-200">모두 함께 스터디 완주를 하는 그 날까지!</p>
        </div>

        <StudyRoomProfile studyRoomData={data.data} />

        <Link href={PATH.STUDY_ROOM(data.data.id)} className="mt-auto mb-[42px]">
          <Button size="xl">
            <span className="text-white text-semibold-16">스터디룸 보러가기</span>
          </Button>
        </Link>
      </article>
    </main>
  );
};

export default StudyRoomComplete;
