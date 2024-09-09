import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postOnboarding } from "@/apis/onboarding/postOnboarding";

import { QUERY_KEYS } from "@/constants/queryKey";

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
