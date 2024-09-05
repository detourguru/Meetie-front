import Image from "next/image";

import { generateDday } from "@/utils/date";

import type { StudyRoomRequestType } from "@/types/studyRoom";

interface StudyRoomProfileProps {
  studyRoomData: StudyRoomRequestType;
}

const StudyRoomProfile = ({ studyRoomData }: StudyRoomProfileProps) => {
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
            <Image src="/svg/ic-logo.svg" alt="logo" width={76} height={76} />
          </div>
          <p className="text-semibold-14 mt-[6.5px]">{studyRoomData.title}</p>
          <p className="text-semibold-10">멤버 {studyRoomData.memberList.length}명</p>
          <p className="text-regular-12 mt-[19px]">{generateDday(studyRoomData.endDate)}</p>
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

export default StudyRoomProfile;
