import { useMutation } from "@tanstack/react-query";

import { postOnboarding } from "@/apis/onboarding/postOnboarding";

import { queryClient } from "@/components/providers/QueryProvider";

import { QUERY_KEYS } from "@/constants/queryKey";

export const usePostOnboardingMutation = () => {
  const postOnboardingMutation = useMutation({
    mutationFn: postOnboarding,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ONBOARDING_COMPLETE] });
    },
  });

  return postOnboardingMutation;
};
