"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import Button from "@/components/common/Button/Button";
import FirstStep from "@/components/OnBoarding/FirstStep/FirstStep";
import FourthStep from "@/components/OnBoarding/FourthStep/FourthStep";
import SecondStep from "@/components/OnBoarding/SecondStep/SecondStep";
import ThirdStep from "@/components/OnBoarding/ThirdStep/ThirdStep";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { QUESTION_DATA, STEPS_DATA } from "@/constants/onBoarding";
import { PATH } from "@/constants/path";

export default function OnBoardingPage() {
  const router = useRouter();
  const [step, setStep] = useState("job");
  const [job, setJob] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<string[]>([]);
  const [style, setStyle] = useState<string[]>([]);
  const [period, setPeriod] = useState<string | null>(null);

  const currentStepIndex = STEPS_DATA.indexOf(step);

  const handleClickJob = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setJob(e.currentTarget.value);
  };

  const handleClickPurpose = (newPurpose: string) => {
    purpose.includes(newPurpose)
      ? setPurpose((prevs) => prevs.filter((prev) => prev !== newPurpose))
      : setPurpose((prev) => [...prev, newPurpose]);
  };

  const handleClickStyle = (newStyle: string) => {
    style.includes(newStyle)
      ? setStyle((prevs) => prevs.filter((prev) => prev !== newStyle))
      : setStyle((prev) => [...prev, newStyle]);
  };

  const handleClickPeriod = (newPeriod: string) => {
    period !== newPeriod ? setPeriod(newPeriod) : setPeriod(null);
  };

  const buttonVariant = () => {
    if (currentStepIndex === 0 && job === null) {
      return "disabled";
    } else if (currentStepIndex === 1 && purpose.length === 0) {
      return "disabled";
    } else if (currentStepIndex === 2 && style.length === 0) {
      return "disabled";
    } else if (currentStepIndex === 3 && period === null) {
      return "disabled";
    }

    return "default";
  };

  const handlePrevStep = () => {
    currentStepIndex === 0 || setStep(STEPS_DATA[currentStepIndex - 1]);
  };

  const handleNextStep = () => {
    currentStepIndex === 3 || setStep(STEPS_DATA[currentStepIndex + 1]);
  };

  const handleMoveComplete = () => {
    router.push(PATH.ONBOARDING_COMPLETE);
  };

  return (
    <main className="flex flex-col h-full">
      <div className="p-[16px] flex justify-between items-center text-gray-200 text-medium-14">
        <p>
          <span className="text-black">{currentStepIndex + 1}</span>/4
        </p>
        <button>SKIP</button>
      </div>

      <article className="flex flex-col px-4 h-max">
        <OnBoardingTitle textData={QUESTION_DATA} index={0} subTextColor="text-gray-200" />

        {currentStepIndex === 0 && <FirstStep clickedJob={job} handleClickJob={handleClickJob} />}
        {currentStepIndex === 1 && (
          <SecondStep clickedPurpose={purpose} handleClickPurpose={handleClickPurpose} />
        )}
        {currentStepIndex === 2 && (
          <ThirdStep clickedStyle={style} handleClickStyle={handleClickStyle} />
        )}
        {currentStepIndex === 3 && (
          <FourthStep clickedPeriod={period} handleClickPeriod={handleClickPeriod} />
        )}
      </article>

      <div className="mt-auto px-4 pb-[42px]">
        <p className="text-center text-gray-200 text-medium-12 mb-[13px]">
          내용은 다시 수정할 수 있어요!
        </p>
        <div className="flex items-center gap-[14px]">
          <Button variant="outline" size="sm" onClick={handlePrevStep}>
            <span className="text-gray-200 text-bold-16">이전</span>
          </Button>
          <Button
            variant={buttonVariant()}
            onClick={currentStepIndex === 3 ? handleMoveComplete : handleNextStep}
          >
            <span className="text-white text-bold-16">
              {currentStepIndex === 3 ? "완료" : "다음"}
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}
