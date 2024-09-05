import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import StudyRoomComplete from "@/components/StudyRoom/StudyRoomComplete/StudyRoomComplete";

import { studyRoomQueryOptions } from "@/hooks/api/study-room/useStudyRoomQuery";

export default function StudyRoomCompletePage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyRoomQueryOptions(params.id)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <StudyRoomComplete />
      </ServerFetchBoundary>
    </Suspense>
  );
}
