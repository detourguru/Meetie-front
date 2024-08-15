import LoginBottom from "@/components/LoginBottom/LoginBottom";
import Image from "next/image";
import Link from "next/link";

import Email from "../../public/svg/ic-login-email.svg";
import Google from "../../public/svg/ic-login-google.svg";
import Kakao from "../../public/svg/ic-login-kakao.svg";
import Naver from "../../public/svg/ic-login-naver.svg";

import Chat from "../../public/svg/ic-home-chat.svg";
import Computer from "../../public/svg/ic-home-computer.svg";
import Gear from "../../public/svg/ic-home-gear.svg";
import Message from "../../public/svg/ic-home-message.svg";
import Rocket from "../../public/svg/ic-home-rocket.svg";

export default function Home() {
  return (
    <Link href="/login">
      <div className="flex flex-col h-screen">
        <main className="flex flex-col h-full">
          <article className="flex flex-col h-full items-center pt-[104px]">
            <div className="flex flex-col items-center gap-2 mb-[60px]">
              <p className="text-semibold-18">같은 목표로 공부중인 유저</p>
              <p className="text-bold-24 text-primary-400">124,368 명</p>
            </div>

            {/* todo 이미지 변경 예정 */}
            <div className="mb-2 w-full h-[303px] relative">
              <Image src={Chat} alt="chat" className="absolute top-[10px] right-[60px]" />
              <Image src={Rocket} alt="rocket" className="z-10 absolute top-0 left-[100px]" />
              <Image
                src={Computer}
                alt="computer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[160px]"
              />
              <Image src={Gear} alt="gear" className="absolute bottom-0 left-0" />
              <Image src={Message} alt="message" className="absolute bottom-0 right-0" />
            </div>

            <div className="flex justify-center items-center gap-[23px]">
              <Image src={Naver} width={46} height={46} alt="naver_login" />
              <Image src={Kakao} width={46} height={46} alt="kakao_login" />
              <Image src={Google} width={46} height={46} alt="google_login" />
              <Image src={Email} width={46} height={46} alt="email_login" />
            </div>
          </article>
        </main>

        <LoginBottom />
      </div>
    </Link>
  );
}
