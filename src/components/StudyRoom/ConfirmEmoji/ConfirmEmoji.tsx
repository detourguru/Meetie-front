import Image from "next/image";

import UserImg from "/public/img/img-user-profile.png";

const ConfirmEmoji = () => {
  return (
    <div className="relative w-10 h-10 rounded-full">
      <Image src={UserImg} alt="user image" width={40} height={40} />
      <span className="absolute bottom-[-4px] right-[-4px] text-semibold-20">😊</span>
    </div>
  );
};

export default ConfirmEmoji;
