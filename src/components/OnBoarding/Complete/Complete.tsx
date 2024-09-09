"use client";

import OnboardingProfile from "@/components/OnBoarding/Profile/Profile";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { COMPLETE_DATA } from "@/constants/onBoarding";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

const Complete = () => {
  const {
    user: { name, profileImage, position, styles },
  } = useUserInformationQuery();

  const userStyles = (styles.length > 0 && styles.slice(0, 2).join("﹒")) || "";

  return (
    <>
      <OnBoardingTitle textData={COMPLETE_DATA(name)} index={0} subTextColor="text-gray-200" />

      <OnboardingProfile
        userName={name}
        profileImage={profileImage}
        position={position}
        styles={userStyles}
      />
    </>
  );
};

export default Complete;
