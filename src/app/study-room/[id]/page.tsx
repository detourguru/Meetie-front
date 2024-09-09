import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import StudyRoomDetail from "@/components/StudyRoom/StudyRoomDetail/StudyRoomDetail";

import { studyRoomQueryOptions } from "@/hooks/api/study-room/useStudyRoomQuery";
import { taskListQueryOptions } from "@/hooks/api/task/useTaskListQuery";

import type { ParamIdType } from "@/types/common";

export default function StudyRoomPage({ params }: ParamIdType) {
  const serverFetchOptions = [studyRoomQueryOptions(params.id), taskListQueryOptions(params.id)];

  return (
    <>
      <Header backgroundColor="bg-[#EBE9F5]">
        <Header.Title>스터디룸</Header.Title>
      </Header>

      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyRoomDetail />
        </ServerFetchBoundary>
      </Suspense>

      <Gnb />
    </>
  );
}
