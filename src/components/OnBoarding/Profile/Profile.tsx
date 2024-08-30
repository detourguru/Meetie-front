import Image from "next/image";

import { POSITIONS_DATA, POSITIONS_KR_DATA } from "@/constants/onBoarding";

import { useOnboardingCompleteQuery } from "@/hooks/api/onboarding/useOnboardingCompleteQuery";

interface OnboardingProfileProps {
  userName: string;
  profileImage: string;
}

const OnboardingProfile = ({ userName, profileImage }: OnboardingProfileProps) => {
  const { onboardingCompleteData } = useOnboardingCompleteQuery();

  const position = POSITIONS_KR_DATA[POSITIONS_DATA.indexOf(onboardingCompleteData.data.position)];
  const styles = onboardingCompleteData.data.styles.slice(0, 2).join("﹒");

  return (
    <div className="relative w-[150px] mt-[77px]">
      <Image
        src="/svg/ic-onboarding-complete-back.svg"
        width={146}
        height={204}
        alt="back"
        priority
        className="absolute top-0"
      />

      <div className="relative flex justify-center w-full transform animate-tilt backdrop-blur-[2px]">
        <div className="w-[146px] h-[204px] border border-gray-100 rounded-lg bg-[#FAFAFF]/70" />
        <div className="absolute top-0 flex flex-col items-center justify-center pt-6 whitespace-nowrap">
          <div className="relative w-[80px] h-[80px] flex justify-center bg-gradient-to-tr from-[#FAFAFF]/60 to-[#FAFAFF]/45">
            <div className="absolute w-[80px] h-[80px] bg-[#0017E2] mix-blend-hue z-10" />
            <Image
              src="/svg/ic-badge-nanum-master.svg"
              width={76}
              height={75}
              alt="meetie master"
            />
            <Image
              src={profileImage}
              width={48}
              height={48}
              alt="profile"
              priority
              className="absolute top-[25px] z-20 rounded-full"
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
