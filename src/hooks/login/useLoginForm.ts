"use client";

import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { END_POINTS } from "@/constants/api";
import { PATH } from "@/constants/path";

import { usePostLoginMutation } from "@/hooks/api/login/usePostLoginMutation";

import { createClient } from "@/utils/supabase/client";

export interface LoginFormType {
  email: string;
  password: string;
}

type SocialProviderType = "google" | "kakao";

export const useLoginForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const { mutate: PostLoginMutation } = usePostLoginMutation();

  const [loginForm, setLoginForm] = useState<LoginFormType>({
    email: localStorage.getItem("savedEmail") || "",
    password: "",
  });
  const [isCheckedSave, setIsCheckedSave] = useState(localStorage.getItem("savedEmail") !== null);
  const isCompleted = Object.values(loginForm).every((value) => value);

  const updateLoginForm = useCallback(
    <Key extends keyof LoginFormType>(key: Key, value: LoginFormType[Key]) => {
      setLoginForm((prevLoginForm) => {
        const data = {
          ...prevLoginForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const handleClickSave = () => {
    setIsCheckedSave((prev) => !prev);
  };

  const handleSignInWithEmail = async () => {
    PostLoginMutation(loginForm, {
      onSuccess: () => {
        if (isCheckedSave) {
          localStorage.setItem("savedEmail", loginForm.email);
        } else {
          localStorage.removeItem("savedEmail");
        }
        router.push(PATH.WALKTHROUGH);
      },
    });
  };

  const handleSignInWithOAuth = async (provider: SocialProviderType) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_API_BASE_URL}${END_POINTS.AUTH_CALLBACK}`,
      },
    });
  };

  return {
    isCheckedSave,
    loginForm,
    isCompleted,
    updateLoginForm,
    handleClickSave,
    handleSignInWithEmail,
    handleSignInWithOAuth,
  };
};
