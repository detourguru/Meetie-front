"use client";

import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

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

    console.log(data);
    console.log(error);

    if (data && !error) {
      router.push("http://localhost:3000/auth/redirect");
    }
  };

  const handleSignInWithOAuth = async (provider: SocialProviderType) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
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
