import Button from "@/components/common/Button/Button";
import Image from "next/image";

export default function OnBoardingCompletePage() {
  return (
    <main className="flex flex-col h-screen">
      <article className="flex flex-col items-center w-full h-full px-5">
        <div className="w-full pt-[82px]">
          <span className="mb-4">
            <h1 className="text-semibold-24">김서희님의</h1>
            <h1 className="text-semibold-24">공개 프로필이 생성되었어요 👏</h1>
          </span>
          <p className="text-gray-200 text-regular-14">나와 딱 맞는 스터디를 찾으러 떠나볼까요?</p>
        </div>

        <div className="relative w-[150px] h-[204px] mt-[77px]">
          <Image
            src="/svg/ic-onboarding-complete-back.svg"
            width={146}
            height={204}
            alt="back"
            className="absolute top-0"
          />

          <div className="relative flex justify-center w-full transform animate-tilt">
            <Image
              src="/svg/ic-onboarding-complete-front.svg"
              width={146}
              height={204}
              alt="front"
              className="backdrop-blur-[1.7px]"
            />
            <div className="absolute top-0 flex flex-col items-center justify-center pt-11 whitespace-nowrap">
              {/* TODO: #18 badge icon으로 변경 예정 */}
              <Image src="/img/img-jake-profile.png" width={48} height={48} alt="profile" />
              <p className="text-semibold-14 mt-[6.5px]">김서희님</p>
              <p className="text-semibold-12">디자이너</p>
              <p className="text-regular-12 mt-[19px]">뉴비, 열정적인, 손이 빠른</p>
            </div>
          </div>
        </div>

        <Button size="xl" className="mb-[42px] mt-auto">
          <span className="text-white text-semibold-16">확인하러 가기</span>
        </Button>
      </article>
    </main>
  );
}
