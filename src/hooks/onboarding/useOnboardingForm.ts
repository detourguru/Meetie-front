import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { STEPS_DATA } from "@/constants/onBoarding";
import { PATH } from "@/constants/path";

import { usePostOnboardingMutation } from "@/hooks/api/onboarding/usePostOnboardingMutation";

import type { OnboardingFormType } from "@/types/onboarding";

export const useOnboardingForm = () => {
  const router = useRouter();

  const { mutate: PostOnboardingMutation } = usePostOnboardingMutation();

  const [step, setStep] = useState<"position" | "purposes" | "styles" | "period">("position");

  const [onBoardingForm, setOnboardingForm] = useState<OnboardingFormType>({
    position: "",
    purposes: [],
    styles: [],
    period: "",
  });

  const currentStepIndex = STEPS_DATA.indexOf(step);
  const isFilled = onBoardingForm[step].length !== 0;

  const updateOnboardingForm = useCallback(
    <Key extends keyof OnboardingFormType>(key: Key, value: OnboardingFormType[Key]) => {
      setOnboardingForm((prevOnboardingForm) => {
        const data = {
          ...prevOnboardingForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const handleStringClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: keyof OnboardingFormType,
  ) => {
    updateOnboardingForm(key, e.currentTarget.value);
  };

  const handleArrayClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: keyof OnboardingFormType,
  ) => {
    const newValue = e.currentTarget.value;
    const prevOnboardingArray = onBoardingForm[key] as string[];
    const value: string[] = prevOnboardingArray.includes(newValue)
      ? prevOnboardingArray.filter((prev) => prev !== newValue)
      : [...prevOnboardingArray, newValue];

    updateOnboardingForm(key, value);
  };

  const handlePrevStep = () => {
    step === "position" || setStep(STEPS_DATA[currentStepIndex - 1]);
  };

  const handleNextStep = () => {
    step === "period" || setStep(STEPS_DATA[currentStepIndex + 1]);
  };

  const handleSubmit = async () => {
    PostOnboardingMutation(onBoardingForm, {
      onSuccess: () => {
        router.push(PATH.ONBOARDING_COMPLETE);
      },
    });
  };

  return {
    step,
    isFilled,
    onBoardingForm,
    currentStepIndex,
    handleStringClick,
    handleArrayClick,
    handlePrevStep,
    handleNextStep,
    handleSubmit,
  };
};
