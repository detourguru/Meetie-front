import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getOnboarding } from "@/apis/onboarding/getOnboarding";

import { QUERY_KEYS } from "@/constants/queryKey";

interface OnboardingCompleteType {
  position: string;
  styles: string[];
}

interface GetOnboardingCompleteResponseType {
  data: OnboardingCompleteType;
  message: string;
  status: number;
}

export const useOnboardingCompleteQuery = () => {
  const { data: onboardingCompleteData, isLoading } = useSuspenseQuery<
    GetOnboardingCompleteResponseType,
    AxiosError
  >({
    queryKey: [QUERY_KEYS.ONBOARDING_COMPLETE],
    queryFn: () => getOnboarding(),
  });

  const isExist = onboardingCompleteData.data ? true : false;

  return { onboardingCompleteData, isExist, isLoading };
};
