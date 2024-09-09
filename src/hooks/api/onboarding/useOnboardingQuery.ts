import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getOnboarding } from "@/apis/onboarding/getOnboarding";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { OnboardingType } from "@/types/onboarding";

interface GetOnboardingResponseType {
  data: OnboardingType;
  message: string;
  status: number;
}

export const useOnboardingQuery = () => {
  const { data: onboardingResponse } = useSuspenseQuery<GetOnboardingResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.ONBOARDING],
    queryFn: () => getOnboarding(),
  });

  const onboardingData = onboardingResponse.data;

  return { onboardingData };
};
