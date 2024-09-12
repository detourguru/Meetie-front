import Link from "next/link";

import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Button from "@/components/common/Button/Button";
import Complete from "@/components/OnBoarding/Complete/Complete";

import { PATH } from "@/constants/path";

import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function OnBoardingCompletePage() {
  const serverFetchOptions = [userInfoQueryOptions()];

  return (
    <Suspense>
      <ServerFetchBoundary fetchOptions={serverFetchOptions}>
        <main className="flex flex-col items-center w-full h-full px-4">
          <Complete />

          <Link href={PATH.STUDY_ROOM_LIST} className="mt-auto mb-[42px]">
            <Button size="xl">
              <span className="text-white text-semibold-16">스터디 찾으러 가기</span>
            </Button>
          </Link>
        </main>
      </ServerFetchBoundary>
    </Suspense>
  );
}
