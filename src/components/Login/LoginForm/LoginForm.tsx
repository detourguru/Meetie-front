"use client";

import Image from "next/image";

import { useEffect } from "react";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";

import { usePasswordEyes } from "@/hooks/common/usePasswordEyes";
import { useLoginForm } from "@/hooks/login/useLoginForm";

const LoginForm = () => {
  const { isCheckedSave, loginForm, updateLoginForm, handleClickSave, handleSignInWithEmail } =
    useLoginForm();

  const { clickedEyes, handleClickedEyes } = usePasswordEyes();

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      updateLoginForm("email", savedEmail);
    }
  }, []);

  return (
    <form className="w-full [&>*]:mb-3 mb-[33px]">
      <Input
        type="text"
        value={loginForm.email}
        placeholder="hellomeetie@gmail.com"
        autoComplete="username"
        onChange={(e) => updateLoginForm("email", e.currentTarget.value)}
      />
      <div className="relative">
        <Input
          type={clickedEyes ? "text" : "password"}
          value={loginForm.password}
          placeholder="************"
          autoComplete="current-password"
          onChange={(e) => updateLoginForm("password", e.currentTarget.value)}
        />
        <div onClick={handleClickedEyes}>
          {clickedEyes ? (
            <Image
              src="/svg/ic-login-open-eye.svg"
              width={24}
              height={14}
              alt="epen eye"
              className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
            />
          ) : (
            <Image
              src="/svg/ic-login-close-eye.svg"
              width={24}
              height={24}
              alt="close eye"
              className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
            />
          )}
        </div>
      </div>

      <div>
        <button
          onClick={handleClickSave}
          type="button"
          className="flex items-center text-gray-200 text-medium-12 gap-[6px] mb-[33px]"
        >
          {isCheckedSave ? (
            <Image src="/svg/ic-login-check.svg" width={18} height={18} alt="check" />
          ) : (
            <Image src="/svg/ic-login-check-disabled.svg" width={18} height={18} alt="check" />
          )}
          아이디 저장
        </button>
      </div>

      <Button type="button" size="xl" className="text-white" onClick={handleSignInWithEmail}>
        <span className="text-semibold-16">로그인</span>
      </Button>
    </form>
  );
};

export default LoginForm;
