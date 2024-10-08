import { useMutation } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { ERROR_MESSAGE } from "@/constants/error";

import { useToast } from "@/hooks/common/useToast";

import type { SignUpFormType } from "@/types/signup";

const postSignUp = async (signUpForm: SignUpFormType) => {
  return await POST(END_POINTS.SIGNUP, createInit(signUpForm));
};

export const usePostSignUpMutation = () => {
  const toast = useToast();

  const postSignUpMutation = useMutation({
    mutationFn: postSignUp,
    onError: (error) => {
      toast.toast({ title: ERROR_MESSAGE.SIGNUP(error.message) });
    },
  });

  return postSignUpMutation;
};
