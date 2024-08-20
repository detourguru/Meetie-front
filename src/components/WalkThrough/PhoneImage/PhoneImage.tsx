import Image from "next/image";

const PhoneImage = () => {
  return (
    <>
      <Image src="/svg/ic-walk-through-phone.svg" width={460} height={385} alt="ic-phone" />
      <Image
        src="/svg/ic-walk-through-gear.svg"
        width={91}
        height={104}
        alt="ic-gear"
        className="absolute top-0 right-0 blur-[1.5px]"
      />
    </>
  );
};

export default PhoneImage;
