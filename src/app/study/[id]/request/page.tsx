import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import StudyRequest from "@/components/Study/StudyRequest/StudyRequest";

import { studyQueryOptions } from "@/hooks/api/study/useStudyQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

import type { ParamIdType } from "@/types/common";

export default function StudyRequestPage({ params }: ParamIdType) {
  const serverFetchOptions = [studyQueryOptions(params.id), userInfoQueryOptions()];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <StudyRequest studyId={params.id} />
      </ServerFetchBoundary>
    </Suspense>
  );
}
