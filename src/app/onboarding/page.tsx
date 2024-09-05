"use client";

import { useRouter } from "next/navigation";

import { Suspense } from "react";

import Button from "@/components/common/Button/Button";
import FirstStep from "@/components/OnBoarding/FirstStep/FirstStep";
import FourthStep from "@/components/OnBoarding/FourthStep/FourthStep";
import SecondStep from "@/components/OnBoarding/SecondStep/SecondStep";
import ThirdStep from "@/components/OnBoarding/ThirdStep/ThirdStep";
import TitleContainer from "@/components/OnBoarding/TitleContainer/TitleContainer";

import { PATH } from "@/constants/path";

import { useOnboardingForm } from "@/hooks/onboarding/useOnboardingForm";

export default function OnBoardingPage() {
  const router = useRouter();

  const {
    step,
    isFilled,
    onBoardingForm,
    currentStepIndex,
    handleStringClick,
    handleArrayClick,
    handlePrevStep,
    handleNextStep,
    handleSubmit,
  } = useOnboardingForm();

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
        <Suspense
          fallback={
            // TODO: 공통 로딩 컴포넌트로 교체
            <div>로딩 컴포넌트</div>
          }
        >
          <TitleContainer currentStepIndex={currentStepIndex} />

          {step === "position" && (
            <FirstStep
              clicked={onBoardingForm.position}
              handleClick={(e) => handleStringClick(e, "position")}
            />
          )}
          {step === "purposes" && (
            <SecondStep
              clicked={onBoardingForm.purposes}
              handleClick={(e) => handleArrayClick(e, "purposes")}
            />
          )}
          {step === "styles" && (
            <ThirdStep
              clicked={onBoardingForm.styles}
              handleClick={(e) => handleArrayClick(e, "styles")}
            />
          )}
          {step === "period" && (
            <FourthStep
              clicked={onBoardingForm.period}
              handleClick={(e) => handleStringClick(e, "period")}
            />
          )}
        </Suspense>
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
            onClick={step === "period" ? handleSubmit : handleNextStep}
            className="transition-all duration-200 ease-in-out"
          >
            <span className="text-white text-bold-16">
              {step === "period"
                ? onBoardingForm.period
                  ? "작성이 완료되었어요!"
                  : "이제 마지막이에요"
                : "다음"}
            </span>
          </Button>
        </div>
      </div>
    </main>
  );
}
