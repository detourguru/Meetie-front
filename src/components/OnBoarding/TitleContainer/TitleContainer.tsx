"use client";

import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { QUESTION_DATA } from "@/constants/onBoarding";

import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

interface TitleContainerProp {
  currentStepIndex: number;
}

const TitleContainer = ({ currentStepIndex }: TitleContainerProp) => {
  const { data } = useUserInfoQuery();

  return (
    <OnBoardingTitle
      textData={QUESTION_DATA(data.data.name)}
      index={currentStepIndex}
      subTextColor="text-gray-200"
    />
  );
};

export default TitleContainer;
