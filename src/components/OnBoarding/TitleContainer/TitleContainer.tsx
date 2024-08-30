"use client";

import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { QUESTION_DATA } from "@/constants/onBoarding";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

interface TitleContainerProp {
  currentStepIndex: number;
}

const TitleContainer = ({ currentStepIndex }: TitleContainerProp) => {
  const {
    userData: {
      data: { name },
    },
  } = useUserInformationQuery();

  return (
    <OnBoardingTitle
      textData={QUESTION_DATA(name)}
      index={currentStepIndex}
      subTextColor="text-gray-200"
    />
  );
};

export default TitleContainer;
