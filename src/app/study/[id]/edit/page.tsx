import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import StudyEditForm from "@/components/Study/StudyEdit/StudyEditForm";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";

export default function EditStudyPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyQueryOptions(params.id)];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <StudyEditForm />
      </ServerFetchBoundary>
    </Suspense>
  );
}
