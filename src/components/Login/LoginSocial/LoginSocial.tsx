"use client";

import Image from "next/image";

import { useLoginForm } from "@/hooks/login/useLoginForm";

const LoginSocial = () => {
  const { handleSignInWithOAuth } = useLoginForm();

  return (
    <div className="flex justify-center items-center gap-[23px]">
      <Image src="/svg/ic-login-naver.svg" width={47} height={46} alt="naver" />
      <Image
        src="/svg/ic-login-kakao.svg"
        width={47}
        height={46}
        alt="kakao_login"
        onClick={() => handleSignInWithOAuth("kakao")}
      />
      <Image
        src="/svg/ic-login-google.svg"
        width={47}
        height={46}
        alt="google_login"
        onClick={() => handleSignInWithOAuth("google")}
      />
    </div>
  );
};

export default LoginSocial;
