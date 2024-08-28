import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import StudyEditForm from "@/components/Study/StudyEdit/StudyEditForm";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";

export default function EditStudyPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyQueryOptions(params.id)];

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>스터디 수정</Header.Title>
      </Header>

      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyEditForm />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
