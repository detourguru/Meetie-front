"use client";

import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

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
    email: "",
    password: "",
  });
  const [isCheckedSave, setIsCheckedSave] = useState(false);

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
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password,
    });

    if (data && !error) {
      router.push(PATH.AUTH_REDIRECT);
    }
  };

  const handleSignInWithOAuth = async (provider: SocialProviderType) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_API_BASE_URL}${PATH.AUTH_CALLBACK}`,
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
