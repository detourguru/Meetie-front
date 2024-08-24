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
  const [step, setStep] = useState<"job" | "purpose" | "style" | "period">("job");

  // TODO: 객체화 state 사용, hook으로 분리
  const [job, setJob] = useState<string>("");
  const [purpose, setPurpose] = useState<string[]>([]);
  const [style, setStyle] = useState<string[]>([]);
  const [period, setPeriod] = useState<string>("");

  const currentStepIndex = STEPS_DATA.indexOf(step);

  // TODO: state 객체화 되면 수정
  const isFilled =
    (step === "job" && job.length !== 0) ||
    (step === "purpose" && purpose.length !== 0) ||
    (step === "style" && style.length !== 0) ||
    (step === "period" && period.length !== 0);

  // TODO: 로그인 기능 추가 후 해당 유저 정보로 수정
  const name = "유의진";

  const handlePrevStep = () => {
    step === "job" || setStep(STEPS_DATA[currentStepIndex - 1]);
  };

  const handleNextStep = () => {
    step === "period" || setStep(STEPS_DATA[currentStepIndex + 1]);
  };

  const handlePostOnboardingData = async () => {
    const data = { job, purpose, style, period };

    // TODO: 함수 모듈화
    try {
      const response = await fetch("http://localhost:3000/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push(PATH.ONBOARDING_COMPLETE);
      }
    } catch (error) {
      console.error(error);
    }
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
        <button onClick={handleMoveComplete}>SKIP</button>
      </div>

      <article className="flex flex-col px-4 h-max">
        <OnBoardingTitle
          textData={QUESTION_DATA(name)}
          index={currentStepIndex}
          subTextColor="text-gray-200"
        />

        {step === "job" && <FirstStep clickedJob={job} setJob={setJob} />}
        {step === "purpose" && <SecondStep clickedPurpose={purpose} setPurpose={setPurpose} />}
        {step === "style" && <ThirdStep clickedStyle={style} setStyle={setStyle} />}
        {step === "period" && <FourthStep clickedPeriod={period} setPeriod={setPeriod} />}
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
            disabled={!isFilled}
            onClick={step === "period" ? handlePostOnboardingData : handleNextStep}
          >
            <span className="text-white text-bold-16">
              {step === "period" ? (period ? "작성이 완료되었어요!" : "이제 마지막이에요") : "다음"}
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}
