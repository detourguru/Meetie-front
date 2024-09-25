"use client";

import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { END_POINTS } from "@/constants/api";
import { PATH } from "@/constants/path";

import { createClient } from "@/utils/supabase/client";

interface LoginFormType {
  email: string;
  password: string;
}

type SocialProviderType = "google" | "kakao";

export const useLoginForm = () => {
  const router = useRouter();
  const supabase = createClient();

  const [loginForm, setLoginForm] = useState<LoginFormType>({
    email: localStorage.getItem("savedEmail") || "",
    password: "",
  });
  const [isCheckedSave, setIsCheckedSave] = useState(localStorage.getItem("savedEmail") !== null);

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
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });

      // 유저가 없음
      // 회원가입으로 보내
      // ?

      // 유저가 있음
      // 소셜 로그인 계정 => 표시
      // 일반 계정
      // 비밀번호 틀림 => 비밀번호 틀렸다고 표시

      if (data && !error) {
        if (isCheckedSave) {
          localStorage.setItem("savedEmail", loginForm.email);
        } else {
          localStorage.removeItem("savedEmail");
        }
        router.push(PATH.WALKTHROUGH);
      }
    } catch (error) {
      console.error(error);
    }
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
    updateLoginForm,
    handleClickSave,
    handleSignInWithEmail,
    handleSignInWithOAuth,
  };
};
