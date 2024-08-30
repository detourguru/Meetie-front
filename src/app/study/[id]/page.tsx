import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import StudyDetail from "@/components/Study/StudyDetail/StudyDetail";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";

export default function StudyDetailPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyQueryOptions(params.id)];

  return (
    <>
      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyDetail />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
