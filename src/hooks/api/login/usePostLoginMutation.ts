import { useMutation } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { ERROR_MESSAGE } from "@/constants/error";

import { useToast } from "@/hooks/common/useToast";
import type { LoginFormType } from "@/hooks/login/useLoginForm";

const postLogin = async (loginForm: LoginFormType) => {
  return await POST(END_POINTS.LOGIN, createInit(loginForm));
};

export const usePostLoginMutation = () => {
  const toast = useToast();

  const postLoginMuation = useMutation({
    mutationFn: postLogin,
    onError: (error) => {
      toast.toast({ title: ERROR_MESSAGE.LOGIN(error.message) });
    },
  });

  return postLoginMuation;
};
