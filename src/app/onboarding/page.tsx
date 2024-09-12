import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Onboarding from "@/components/OnBoarding/Onboarding";

import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function OnBoardingPage() {
  const serverFetchOptions = [userInfoQueryOptions()];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <Onboarding />
      </ServerFetchBoundary>
    </Suspense>
  );
}
