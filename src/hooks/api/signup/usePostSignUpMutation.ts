import { useMutation } from "@tanstack/react-query";

import { postSignUp } from "@/apis/signup/postSignup";

import { queryClient } from "@/components/providers/QueryProvider";

import { QUERY_KEYS } from "@/constants/queryKey";

export const usePostSignUpMutation = () => {
  const postSignUpMutation = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SIGNUP],
      });
    },
  });

  return postSignUpMutation;
};
