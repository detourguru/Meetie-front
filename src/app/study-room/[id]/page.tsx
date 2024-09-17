import { Suspense } from "react";

import { format } from "date-fns";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import Header from "@/components/common/Header/Header";
import StudyRoomDetail from "@/components/StudyRoom/StudyRoomDetail/StudyRoomDetail";
import StudyRoomDetailSkeleton from "@/components/StudyRoom/StudyRoomDetail/StudyRoomDetailSkeleton";

import { scheduleListQueryOptions } from "@/hooks/api/schedule/useScheduleListQuery";
import { studyRoomQueryOptions } from "@/hooks/api/study-room/useStudyRoomQuery";
import { taskListQueryOptions } from "@/hooks/api/task/useTaskListQuery";
import { taskConfirmListQueryOptions } from "@/hooks/api/task-confirm/useTaskConfirmListQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

import type { ParamIdType } from "@/types/common";

export default function StudyRoomPage({ params }: ParamIdType) {
  const serverFetchOptions = [
    studyRoomQueryOptions(params.id),
    taskListQueryOptions(params.id),
    scheduleListQueryOptions(params.id),
    taskConfirmListQueryOptions({
      studyRoomId: params.id,
      referenceDate: format(new Date(), "yyyy-MM-dd"),
    }),
    userInfoQueryOptions(),
  ];

  return (
    <>
      <Header>
        <Header.Title>스터디룸</Header.Title>
      </Header>

      <Suspense fallback={<StudyRoomDetailSkeleton />}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyRoomDetail />
        </ServerFetchBoundary>
      </Suspense>

      <Gnb />
    </>
  );
}
