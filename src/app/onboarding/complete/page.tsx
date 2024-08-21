import Image from "next/image";
import Link from "next/link";

import Button from "@/components/common/Button/Button";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";

import { COMPLETE_DATA, JOBS_DATA, JOBS_KR_DATA } from "@/constants/onBoarding";
import { PATH } from "@/constants/path";

export default async function OnBoardingCompletePage() {
  // TODO: 로그인 기능 추가 후 해당 유저 이름으로 변경
  const name = "유의진";

  const response = await fetch("http://localhost:3000/api/onboarding", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  // TODO: DB 연결되면 수정 예정
  const data: { job: string; purpose: string[]; style: string[]; period: string } = result.data;
  const job: string = JOBS_KR_DATA[JOBS_DATA.indexOf(data.job)];
  // TODO: 글자 수 길어질 때 어떻게 할지 고민
  const styles: string = data.style.map((style: string) => style).join("﹒");

  return (
    <main className="flex flex-col h-screen">
      <article className="flex flex-col items-center w-full h-full px-5">
        <OnBoardingTitle textData={COMPLETE_DATA(name)} index={0} subTextColor="text-gray-200" />

        <div className="relative w-[150px] mt-[77px]">
          <Image
            src="/svg/ic-onboarding-complete-back.svg"
            width={146}
            height={204}
            alt="back"
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
                {/* TODO: 로그인 기능 추가 후 해당 유저 프로필로 변경 */}
                <Image
                  src="/img/img-user-profile.png"
                  width={48}
                  height={48}
                  alt="profile"
                  priority
                  className="absolute top-[25px] z-20"
                />
              </div>
              <p className="text-semibold-14 mt-[6.5px]">{name}님</p>
              <p className="text-semibold-10">{job}</p>
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

        <Link href={PATH.STUDY_ROOM_LIST} className="mt-auto mb-[42px]">
          <Button size="xl">
            <span className="text-white text-semibold-16">스터디 찾으러 가기</span>
          </Button>
        </Link>
      </article>
    </main>
  );
}
