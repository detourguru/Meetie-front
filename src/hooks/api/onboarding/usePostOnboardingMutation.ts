import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { OnboardingFormType } from "@/types/onboarding";

const postOnboarding = async (onboardingForm: OnboardingFormType) => {
  return await POST(END_POINTS.ONBOARDING, createInit(onboardingForm));
};

export const usePostOnboardingMutation = () => {
  const queryClient = useQueryClient();

  const postOnboardingMutation = useMutation({
    mutationFn: postOnboarding,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO] });
    },
  });

  return postOnboardingMutation;
};
