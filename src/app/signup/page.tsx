"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { SIGNUP_DATA } from "@/constants/onBoarding";
import { PATH } from "@/constants/path";

import { usePasswordEyes } from "@/hooks/common/usePasswordEyes";
import { useSignUpForm } from "@/hooks/signup/useSignUpForm";

export default function SignUpPage() {
  const router = useRouter();

  const {
    signupForm,
    updateSignUpForm,
    checkPassword,
    handleChangeCheckPassword,
    isCorrectEmail,
    isCorrectPassword,
    isMathed,
    isCompleted,
    handleSubmit,
  } = useSignUpForm();

  const { clickedEyes: clickedPasswordEyes, handleClickedEyes: handleClickedPasswordEyes } =
    usePasswordEyes();
  const {
    clickedEyes: clickedCheckPasswordEyes,
    handleClickedEyes: handleClickedCheckPasswordEyes,
  } = usePasswordEyes();

  const handleBack = () => {
    router.push(PATH.LOGIN);
  };

  const inputTitleClassName = "text-semibold-16 mb-[10px]";
  const SpanAlertClassName = "absolute left-0 -bottom-6 text-primary-400 text-regular-12";

  return (
    <main className="relative flex flex-col items-center h-full p-4">
      <span className="absolute top-4 left-4">
        <Image
          src="/svg/ic-calendar-back-arrow.svg"
          width={10}
          height={18}
          alt="go login page"
          onClick={handleBack}
        />
      </span>
      <OnBoardingTitle textData={SIGNUP_DATA} index={0} />

      <form className="flex flex-col justify-between w-full h-full pt-8">
        <div className="[&>*]:mb-9 ">
          <div className="relative">
            <h2 className={inputTitleClassName}>이름</h2>
            <Input
              type="text"
              name="name"
              value={signupForm.name}
              placeholder="이름을 입력해주세요."
              onChange={(e) => updateSignUpForm("name", e.currentTarget.value)}
            />
          </div>
          <div className="relative">
            <h2 className={inputTitleClassName}>이메일</h2>
            <Input
              type="text"
              name="email"
              value={signupForm.email}
              placeholder="이메일을 입력해주세요."
              autoComplete="username"
              onChange={(e) => updateSignUpForm("email", e.currentTarget.value)}
            />
            {signupForm.email && !isCorrectEmail && (
              <span className={SpanAlertClassName}>올바른 이메일을 입력해주세요</span>
            )}
          </div>
          <div className="relative">
            <h2 className={inputTitleClassName}>비밀번호</h2>
            <Input
              type={clickedPasswordEyes ? "text" : "password"}
              name="password"
              value={signupForm.password}
              placeholder="비밀번호를 입력해주세요."
              autoComplete="new-password"
              onChange={(e) => updateSignUpForm("password", e.currentTarget.value)}
            />
            <div onClick={handleClickedPasswordEyes}>
              {clickedPasswordEyes ? (
                <Image
                  src="/svg/ic-login-open-eye.svg"
                  width={24}
                  height={14}
                  alt="open eye"
                  className="absolute cursor-pointer right-3 bottom-4"
                />
              ) : (
                <Image
                  src="/svg/ic-login-close-eye.svg"
                  width={24}
                  height={24}
                  alt="close eye"
                  className="absolute cursor-pointer right-3 bottom-3"
                />
              )}
            </div>
            {signupForm.password && !isCorrectPassword && (
              <span className={SpanAlertClassName}>
                8~20 자리의 영문, 숫자, 특수기호를 포함해주세요
              </span>
            )}
          </div>
          <div className="relative">
            <h2 className={inputTitleClassName}>비밀번호 확인</h2>
            <Input
              type={clickedCheckPasswordEyes ? "text" : "password"}
              name="passwordCheck"
              value={checkPassword}
              placeholder="비밀번호를 입력해주세요."
              autoComplete="new-password"
              onChange={(e) => handleChangeCheckPassword(e.currentTarget.value)}
            />
            <div onClick={handleClickedCheckPasswordEyes}>
              {clickedCheckPasswordEyes ? (
                <Image
                  src="/svg/ic-login-open-eye.svg"
                  width={24}
                  height={14}
                  alt="open eye"
                  className="absolute cursor-pointer right-3 bottom-4"
                />
              ) : (
                <Image
                  src="/svg/ic-login-close-eye.svg"
                  width={24}
                  height={24}
                  alt="close eye"
                  className="absolute cursor-pointer right-3 bottom-3"
                />
              )}
            </div>
            {checkPassword && !isMathed && (
              <span className={SpanAlertClassName}>비밀번호가 일치하지 않습니다</span>
            )}
          </div>
        </div>
        <Button
          type="button"
          size="xl"
          disabled={!isCompleted}
          onClick={handleSubmit}
          className="mt-auto mb-[42px]"
        >
          <span className="text-white">완료</span>
        </Button>
      </form>
    </main>
  );
}
