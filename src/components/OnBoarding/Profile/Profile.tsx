import Image from "next/image";

import { default as CustomImage } from "@/components/common/Image/Image";

interface OnboardingProfileProps {
  userName: string;
  profileImage: string;
  position: string;
  styles: string;
}

const OnboardingProfile = ({
  userName,
  profileImage,
  position,
  styles,
}: OnboardingProfileProps) => {
  return (
    <div className="relative w-[150px] mt-[77px]">
      <Image
        src="/svg/ic-onboarding-complete-back.svg"
        width={153}
        height={209}
        alt="back"
        priority
        className="absolute top-0"
      />

      <div className="relative flex justify-center w-full transform animate-tilt backdrop-blur-[2px]">
        <div className="w-[146px] h-[204px] border border-gray-100 rounded-lg bg-[#FAFAFF]/70" />
        <div className="absolute top-0 flex flex-col items-center justify-center pt-6 whitespace-nowrap">
          <div className="relative w-[80px] h-[80px] flex justify-center bg-gradient-to-tr from-[#FAFAFF]/60 to-[#FAFAFF]/45">
            <div className="absolute w-[80px] h-[80px] bg-[#0017E2] mix-blend-hue z-10" />
            <CustomImage
              src="/svg/ic-profile-badge.svg"
              alt="profile badge"
              className="w-[78px] h-[77px]"
            />
            <Image
              src={profileImage}
              width={48}
              height={48}
              alt="profile"
              priority
              className="absolute top-[24px] z-20 rounded-full bg-gray-100"
            />
          </div>
          <p className="text-semibold-14 mt-[6.5px]">{userName}님</p>
          <p className="text-semibold-10">{position}</p>
          <p className="text-regular-12 mt-[19px]">{styles}</p>
        </div>
      </div>

      <Image
        src="/svg/ic-onboarding-profile-shadow.svg"
        width={162}
        height={15}
        alt="profile shadow"
        className="mt-[47px]"
      />
    </div>
  );
};

export default OnboardingProfile;
