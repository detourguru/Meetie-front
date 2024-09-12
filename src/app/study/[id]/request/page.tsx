import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import StudyRequest from "@/components/Study/StudyRequest/StudyRequest";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function StudyRequestPage({ params }: { params: { id: string } }) {
  const serverFetchOptions = [studyQueryOptions(params.id), userInfoQueryOptions()];

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>대기중인 요청</Header.Title>
      </Header>

      <div className="w-full h-[1px] bg-gray-250 mt-10" />

      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyRequest />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
