import Image from "next/image";

const MegaPhoneImage = () => {
  return (
    <li className="min-w-[375px] snap-always snap-center">
      <Image src="/svg/ic-walk-through-megaphone.svg" width={411} height={354} alt="megaphone" />
    </li>
  );
};

export default MegaPhoneImage;
