import { useMutation } from "@tanstack/react-query";

import { postSignUp } from "@/apis/signup/postSignup";

export const usePostSignUpMutation = () => {
  const postSignUpMutation = useMutation({
    mutationFn: postSignUp,
  });

  return postSignUpMutation;
};
