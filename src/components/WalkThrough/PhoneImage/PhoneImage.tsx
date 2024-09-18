import Image from "next/image";

import type { WalkThroughImageProps } from "@/types/walkThrough";

const PhoneImage = ({ isMount }: WalkThroughImageProps) => {
  return (
    <li className="relative min-w-[375px] snap-always snap-center p-4">
      <Image
        src="/svg/ic-walk-through-phone.svg"
        width={460}
        height={385}
        alt="ic-phone"
        priority
        className={isMount ? "transform delay-200 animate-downUp" : ""}
      />
      <Image
        src="/svg/ic-walk-through-chat.svg"
        width={110}
        height={62}
        alt="walk-through-chat"
        className={`absolute top-[100px] right-[71px] opacity-0 ${isMount && "transform delay-1000 animate-fadeIn"}`}
      />
      <Image
        src="/svg/ic-walk-through-gear.svg"
        width={133}
        height={127}
        alt="ic-gear"
        className="absolute top-0 -right-[44px] blur-[1.5px]"
      />
    </li>
  );
};

export default PhoneImage;
