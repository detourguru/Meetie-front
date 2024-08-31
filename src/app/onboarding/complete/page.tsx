"use client";

import Image from "next/image";
import Link from "next/link";

import { Suspense } from "react";

import Button from "@/components/common/Button/Button";
import OnboardingProfile from "@/components/OnBoarding/Profile/Profile";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { COMPLETE_DATA } from "@/constants/onBoarding";
import { PATH } from "@/constants/path";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

export default function OnBoardingCompletePage() {
  const {
    userData: {
      data: { name, profileImage },
    },
  } = useUserInformationQuery();

  return (
    <main className="flex flex-col items-center w-full h-full px-4">
      <OnBoardingTitle textData={COMPLETE_DATA(name)} index={0} subTextColor="text-gray-200" />

      <Suspense
        fallback={
          <div className="relative w-[150px] mt-[77px]">
            <Image
              src="/svg/ic-onboarding-complete-back.svg"
              width={153}
              height={209}
              alt="back"
              priority
              className="absolute top-0"
            />
          </div>
        }
      >
        <OnboardingProfile userName={name} profileImage={profileImage} />

        <Link href={PATH.STUDY_ROOM_LIST} className="mt-auto mb-[42px]">
          <Button size="xl">
            <span className="text-white text-semibold-16">스터디 찾으러 가기</span>
          </Button>
        </Link>
      </Suspense>
    </main>
  );
}
