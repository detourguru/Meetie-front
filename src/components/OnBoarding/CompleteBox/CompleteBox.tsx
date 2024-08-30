"use client";

import Link from "next/link";

import Button from "@/components/common/Button/Button";
import OnboardingProfile from "@/components/OnBoarding/Profile/Profile";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { COMPLETE_DATA } from "@/constants/onBoarding";
import { PATH } from "@/constants/path";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

const CompleteBox = () => {
  const {
    userData: {
      data: { name, profileImage },
    },
  } = useUserInformationQuery();

  return (
    <article className="flex flex-col items-center w-full h-full px-5">
      <OnBoardingTitle textData={COMPLETE_DATA(name)} index={0} subTextColor="text-gray-200" />

      <OnboardingProfile userName={name} profileImage={profileImage} />

      <Link href={PATH.STUDY_ROOM_LIST} className="mt-auto mb-[42px]">
        <Button size="xl">
          <span className="text-white text-semibold-16">스터디 찾으러 가기</span>
        </Button>
      </Link>
    </article>
  );
};

export default CompleteBox;
