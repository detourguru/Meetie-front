import Image from "next/image";
import Link from "next/link";

import LoginBottom from "@/components/Login/LoginBottom/LoginBottom";

import { PATH } from "@/constants/path";

export default function Home() {
  return (
    <Link href={PATH.LOGIN}>
      <div className="flex flex-col h-screen">
        <main className="flex flex-col h-full">
          <article className="flex flex-col h-full items-center pt-[104px]">
            <div className="flex flex-col items-center gap-2 mb-[60px]">
              <p className="text-semibold-18">같은 목표로 공부중인 유저</p>
              <p className="text-bold-24 text-primary-400">124,368 명</p>
            </div>

            <div className="mb-2 w-full h-[303px] relative">
              <Image
                src="/svg/ic-home-chat.svg"
                width={68}
                height={38}
                alt="chat"
                className="absolute top-[10px] right-[60px]"
              />
              <Image
                src="/svg/ic-home-rocket.svg"
                width={104}
                height={160}
                alt="rocket"
                className="z-10 absolute top-0 left-[100px]"
              />
              <Image
                src="/svg/ic-home-computer.svg"
                width={212}
                height={176}
                alt="computer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[160px]"
              />
              <Image
                src="/svg/ic-home-gear.svg"
                width={77}
                height={88}
                alt="gear"
                className="absolute bottom-0 left-0 blur-[1.5px]"
              />
              <Image
                src="/svg/ic-home-message.svg"
                width={102}
                height={142}
                alt="message"
                className="absolute bottom-0 right-0 blur-[1.5px]"
              />
            </div>

            <div className="flex justify-center items-center gap-[23px]">
              <Image src="/svg/ic-login-naver.svg" width={46} height={46} alt="naver_login" />
              <Image src="/svg/ic-login-kakao.svg" width={46} height={46} alt="kakao_login" />
              <Image src="/svg/ic-login-google.svg" width={46} height={46} alt="google_login" />
              <Image src="/svg/ic-login-email.svg" width={46} height={46} alt="email_login" />
            </div>
          </article>
        </main>

        <LoginBottom />
      </div>
    </Link>
  );
}
