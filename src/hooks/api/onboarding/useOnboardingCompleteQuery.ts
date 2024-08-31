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

export const useOnboardingCompleteQuery = (type: "check" | "complete") => {
  const { data: onboardingCompleteData, isLoading } = useSuspenseQuery<
    GetOnboardingCompleteResponseType,
    AxiosError
  >({
    queryKey: [QUERY_KEYS.ONBOARDING_COMPLETE, [type]],
    queryFn: () => getOnboarding(),
  });

  const isExist = onboardingCompleteData.data ? true : false;

  return { onboardingCompleteData, isExist, isLoading };
};
