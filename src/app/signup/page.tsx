"use client";

import Image from "next/image";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { SIGNUP_DATA } from "@/constants/onBoarding";

export default function SignUpPage() {
  const inputTitleClassName = "text-semibold-16 mb-[10px]";

  return (
    <main className="flex flex-col h-full">
      <article className="flex flex-col items-center h-full p-4">
        <OnBoardingTitle textData={SIGNUP_DATA} index={0} />

        <form className="w-full [&>*]:mb-6 mb-[33px] pt-8">
          <div>
            <h2 className={inputTitleClassName}>이름</h2>
            <Input type="text" placeholder="이름을 입력해주세요." />
          </div>
          <div>
            <h2 className={inputTitleClassName}>이메일</h2>
            <Input type="email" placeholder="이메일을 입력해주세요." />
          </div>
          <div className="relative">
            <h2 className={inputTitleClassName}>비밀번호</h2>
            <Input type="password" placeholder="비밀번호를 입력해주세요." />
            <Image
              src="/svg/ic-login-close-eye.svg"
              width={24}
              height={24}
              alt="close eye"
              className="absolute cursor-pointer right-3 bottom-3"
            />
          </div>
          <div className="relative">
            <h2 className={inputTitleClassName}>비밀번호 확인</h2>
            <Input type="password" placeholder="비밀번호를 입력해주세요." />
            <Image
              src="/svg/ic-login-close-eye.svg"
              width={24}
              height={24}
              alt="close eye"
              className="absolute cursor-pointer right-3 bottom-3"
            />
          </div>
        </form>
        <Button size="xl" disabled className="mt-auto mb-[42px]">
          <span className="text-white">완료</span>
        </Button>
      </article>
    </main>
  );
}
