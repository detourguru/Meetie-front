import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Header from "@/components/common/Header/Header";
import StudyRequest from "@/components/Study/StudyRequest/StudyRequest";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

import type { ParamIdType } from "@/types/common";

export default function StudyRequestPage({ params }: ParamIdType) {
  const serverFetchOptions = [studyQueryOptions(params.id), userInfoQueryOptions()];

  return (
    <>
      <Header>
        <Header.LeftButton />
        <Header.Title hasButton>대기중인 요청</Header.Title>
      </Header>

      <div className="w-full h-[1px] bg-[#dddddd] mt-14" />

      <Suspense>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyRequest studyId={params.id} />
        </ServerFetchBoundary>
      </Suspense>
    </>
  );
}
