import Image from "next/image";

import { default as CustomImage } from "@/components/common/Image/Image";

import type { WalkThroughImageProps } from "@/types/walkThrough";

const MegaPhoneImage = ({ isMount }: WalkThroughImageProps) => {
  return (
    <li className="relative min-w-[375px] snap-always snap-center">
      <Image
        src="/svg/ic-walk-through-megaphone.svg"
        width={411}
        height={354}
        alt="megaphone"
        className={isMount ? "transform delay-200 animate-scaleUp" : ""}
      />
      <CustomImage
        src="/svg/ic-walk-through-chat.svg"
        alt="walk-through-chat"
        className={`absolute w-[130px] h-[73px] top-[120px] right-[65px] opacity-0 ${isMount && "transform delay-300 animate-fadeIn rotate-6"}`}
      />
    </li>
  );
};

export default MegaPhoneImage;
