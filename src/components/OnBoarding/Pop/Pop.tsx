import Image from "next/image";

import { default as CustomImage } from "@/components/common/Image/Image";

const Pop = () => {
  const popClassName = "absolute opacity-20 translate-opacity animate-pulse";

  return (
    <>
      <Image
        src="/svg/ic-pop-sm.svg"
        width={41}
        height={40}
        alt="pop-sm"
        className={`top-[160px] right-[18px] delay-300 ${popClassName}`}
      />
      <Image
        src="/svg/ic-pop-lg.svg"
        width={99}
        height={96}
        alt="pop-lg"
        className={`top-[130px] -right-[12px] delay-300 ${popClassName}`}
      />

      <Image
        src="/svg/ic-pop-sm.svg"
        width={41}
        height={40}
        alt="pop-sm"
        className={`top-[300px] left-[23px] ${popClassName}`}
      />
      <Image
        src="/svg/ic-pop-md.svg"
        width={83}
        height={79}
        alt="pop-md"
        className={`top-[280px] left-[2px] ${popClassName}`}
      />

      <Image
        src="/svg/ic-pop-sm.svg"
        width={41}
        height={40}
        alt="pop-md"
        className={`bottom-[220px] left-[79px] delay-500 ${popClassName}`}
      />
      <CustomImage
        src="/svg/ic-pop-md.svg"
        alt="pop-md"
        className={`bottom-[200px] left-[60px] w-[80px] h-[80px] delay-500 ${popClassName}`}
      />
    </>
  );
};

export default Pop;
