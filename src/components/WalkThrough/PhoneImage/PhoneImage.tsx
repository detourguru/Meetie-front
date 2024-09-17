import Image from "next/image";

const PhoneImage = () => {
  return (
    <li className="relative min-w-[375px] snap-always snap-center p-4">
      <Image
        src="/svg/ic-walk-through-phone.svg"
        width={460}
        height={385}
        alt="ic-phone"
        priority
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
