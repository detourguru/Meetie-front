import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Button from "@/components/common/Button/Button";
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

      <div className="flex gap-3 px-4 py-3 fixed bottom-0 bg-white">
        <Button variant="outline" size="sm">
          <p className="text-bold-16 text-[#adb5bd]">취소</p>
        </Button>
        <Button>
          <p className="text-bold-16 text-white">수정하기</p>
        </Button>
      </div>
    </>
  );
}
