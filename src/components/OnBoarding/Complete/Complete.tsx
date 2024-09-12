"use client";

import OnboardingProfile from "@/components/OnBoarding/Profile/Profile";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { COMPLETE_DATA } from "@/constants/onBoarding";

import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

const Complete = () => {
  const { data, isFetching } = useUserInfoQuery();

  const { name, profileImage, position, styles } = data.data;

  const userStyles = (styles.length > 0 && styles.slice(0, 2).join("﹒").slice(0, 11)) || "";

  return (
    <>
      <OnBoardingTitle textData={COMPLETE_DATA(name)} index={0} subTextColor="text-gray-200" />

      <OnboardingProfile
        userName={name}
        profileImage={profileImage}
        position={position}
        styles={userStyles}
        isFetching={isFetching}
      />
    </>
  );
};

export default Complete;
