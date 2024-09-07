import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import StudyRoomComplete from "@/components/StudyRoom/StudyRoomComplete/StudyRoomComplete";

import { studyRoomCompleteQueryOptions } from "@/hooks/api/study-room/useStudyRoomCompleteQuery";

export default function StudyRoomCompletePage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyRoomCompleteQueryOptions(params.id)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <StudyRoomComplete />
      </ServerFetchBoundary>
    </Suspense>
  );
}
