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

      if (error) {
        const { data: loginData, error: loginError } = await supabase
          .from("userinfo")
          .select("email")
          .eq("email", loginForm.email)
          .single();

        // TODO: 소셜 로그인일 경우도 추가해야됨
        if (loginError) {
          throw new Error("회원가입을 하세연");
        }

        if (loginData) {
          throw new Error("비밀번호가 틀렸자나여");
        }
      }

      if (data) {
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
