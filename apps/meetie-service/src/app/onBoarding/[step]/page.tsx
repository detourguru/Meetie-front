"use client";

import Button from "@/components/common/Button/Button";
import FirstStep from "@/components/OnBoarding/FirstStep/FirstStep";
import FourthStep from "@/components/OnBoarding/FourthStep/FourthStep";
import SecondStep from "@/components/OnBoarding/SecondStep/SecondStep";
import ThirdStep from "@/components/OnBoarding/ThirdStep/ThirdStep";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";
import { QUESTION_DATA, STEPS_DATA } from "@/constants/onBoarding";

import { PATH } from "@/constants/path";

import { notFound, useParams, useRouter } from "next/navigation";

export default function OnBoardingPage() {
  const navigate = useRouter();
  const params = useParams();
  const step = params.step as string;
  const currentStepIndex = STEPS_DATA.indexOf(step);

  const handlePrevStep = () => {
    currentStepIndex === 0 ||
      navigate.push(`${PATH.ONBOARDING}/${STEPS_DATA[currentStepIndex - 1]}`);
  };

  const handleNextStep = () => {
    currentStepIndex === 3 ||
      navigate.push(`${PATH.ONBOARDING}/${STEPS_DATA[currentStepIndex + 1]}`);
  };

  if (!STEPS_DATA.includes(step)) {
    return notFound();
  }

  return (
    <main className="flex flex-col h-full">
      <div className="p-[16px] flex justify-between items-center text-gray-200 text-medium-14">
        <p>
          <span className="text-black">{currentStepIndex + 1}</span>/4
        </p>
        <button>SKIP</button>
      </div>

      <article className="flex flex-col px-4 h-max">
        <OnBoardingTitle
          textData={QUESTION_DATA}
          index={currentStepIndex}
          subTextColor="text-gray-200"
        />

        {currentStepIndex === 0 && <FirstStep />}
        {currentStepIndex === 1 && <SecondStep />}
        {currentStepIndex === 2 && <ThirdStep />}
        {currentStepIndex === 3 && <FourthStep />}
      </article>

      <div className="mt-auto px-4 pb-[42px]">
        <p className="text-center text-gray-200 text-medium-12 mb-[13px]">
          내용은 다시 수정할 수 있어요!
        </p>
        <div className="flex items-center gap-[14px]">
          <Button variant="outline" size="sm" onClick={handlePrevStep}>
            <span className="text-gray-200 text-bold-16">이전</span>
          </Button>
          <Button onClick={handleNextStep}>
            <span className="text-white text-bold-16">다음</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
