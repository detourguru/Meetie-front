import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { OnboardingFormType } from "@/types/onboarding";

export const postOnboarding = async (onboardingForm: OnboardingFormType) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axiosInstance.post(END_POINTS.ONBOARDING, onboardingForm, config);
};
