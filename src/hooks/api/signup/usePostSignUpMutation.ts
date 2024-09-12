import { useMutation } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

import type { SignUpFormType } from "@/types/signup";

const postSignUp = async (signUpForm: SignUpFormType) => {
  return await POST(END_POINTS.SIGNUP, createInit(signUpForm));
};

export const usePostSignUpMutation = () => {
  const postSignUpMutation = useMutation({
    mutationFn: postSignUp,
  });

  return postSignUpMutation;
};
