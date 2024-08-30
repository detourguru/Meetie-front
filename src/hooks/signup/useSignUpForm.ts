import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import { usePostSignUpMutation } from "../api/signup/usePostSignUpMutation";

import { PATH } from "@/constants/path";

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

  // 올바른 이메일 확인
  const isCorrectEmail =
    !signupForm.email ||
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
      signupForm.email,
    );
  // 올바른 비밀번호 확인 (영문 숫자 특수기호 조합 8자리 이상)
  const isCorrectPassword =
    !signupForm.password ||
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/.test(signupForm.password);
  // 비밀번호 확인
  const isMathed = !checkPassword || signupForm.password === checkPassword;
  // 다 채워져 있는 지 확인
  const isCompleted =
    isMathed &&
    isCorrectEmail &&
    isCorrectPassword &&
    Object.values(signupForm).every((value) => value);

  const handleSubmit = async () => {
    PostSignUpMutation(signupForm, {
      onSuccess: () => {
        router.push(PATH.LOGIN);
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
