import Image from "next/image";
import Link from "next/link";

import { default as CustomImage } from "@/components/common/Image/Image";

import { PATH } from "@/constants/path";

export default function Home() {
  return (
    <Link href={PATH.LOGIN}>
      <main className="flex flex-col h-full bg-gradient-to-b from-primary-100">
        <article className="flex flex-col h-full items-center pt-[104px]">
          <div className="flex flex-col items-center gap-2 mb-[60px]">
            <p className="text-semibold-18">같은 목표로 공부중인 유저</p>
            <p className="text-bold-24 text-[#7677FF]">124,368 명</p>
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
              width={143}
              height={187}
              alt="rocket"
              priority
              className="z-10 absolute top-0 left-[60px] transform delay-500 animate-moveUp"
            />
            <Image
              src="/svg/ic-home-computer.svg"
              width={168}
              height={127}
              alt="computer"
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
            <CustomImage
              src="/svg/ic-home-gear.svg"
              alt="gear"
              className="absolute bottom-0 left-0 blur-[1.5px] w-[78px] h-[88px]"
            />
            <Image
              src="/svg/ic-home-message.svg"
              width={103}
              height={143}
              alt="message"
              className="absolute bottom-0 right-0 blur-[1.5px]"
            />
          </div>
        </article>
      </main>
    </Link>
  );
}
