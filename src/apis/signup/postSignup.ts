import { axiosInstance } from "../axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { SignUpFormType } from "@/types/signup";

export const postSignUp = async (signUpForm: SignUpFormType) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axiosInstance.post(END_POINTS.SIGNUP, signUpForm, config);
};
