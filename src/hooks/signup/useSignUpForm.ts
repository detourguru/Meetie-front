import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { usePostSignUpMutation } from "../api/signup/usePostSignUpMutation";

import { PATH } from "@/constants/path";
import { REGEX } from "@/constants/regex";

import type { SignUpFormType } from "@/types/signup";

export const useSignUpForm = () => {
  const router = useRouter();

  const { mutate: PostSignUpMutation } = usePostSignUpMutation();

  const [signupForm, setSignupForm] = useState<SignUpFormType>({
    name: "",
    email: "",
    password: "",
  });

  const [checkPassword, setCheckPassword] = useState("");

  const updateSignUpForm = useCallback(
    <Key extends keyof SignUpFormType>(key: Key, value: SignUpFormType[Key]) => {
      setSignupForm((prevSignUpForm) => {
        const data = {
          ...prevSignUpForm,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const handleChangeCheckPassword = (value: string) => {
    setCheckPassword(value);
  };

  const isCorrectEmail = REGEX.EMAIL.test(signupForm.email);
  const isCorrectPassword = REGEX.PASSWORD.test(signupForm.password);
  const isMathed = signupForm.password === checkPassword;
  const isCompleted =
    isMathed &&
    isCorrectEmail &&
    isCorrectPassword &&
    Object.values(signupForm).every((value) => value);

  const handleSubmit = async () => {
    PostSignUpMutation(signupForm, {
      onSuccess: () => {
        router.push(PATH.WALKTHROUGH);
      },
    });
  };

  return {
    signupForm,
    updateSignUpForm,
    checkPassword,
    handleChangeCheckPassword,
    isCorrectEmail,
    isCorrectPassword,
    isMathed,
    isCompleted,
    handleSubmit,
  };
};
