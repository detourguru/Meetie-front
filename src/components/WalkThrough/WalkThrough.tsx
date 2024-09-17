"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import Button from "@/components/common/Button/Button";
import OnBoardingTitle from "@/components/OnBoardingTitle/OnBoardingTitle";
import CalendarImage from "@/components/WalkThrough/CalendarImage/CalendarImage";
import MegaPhoneImage from "@/components/WalkThrough/MegaPhoneImage/MegaPhoneImage";
import PhoneImage from "@/components/WalkThrough/PhoneImage/PhoneImage";

import { PATH } from "@/constants/path";
import { EXPLAIN_DATA } from "@/constants/walkThrough";

const WalkThrough = () => {
  const router = useRouter();

  const [walkThroughNumber, setWalkThroughNumber] = useState(0);

  const handleMoveOnboarding = () => {
    router.push(PATH.ONBOARDING);
  };

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft } = e.currentTarget;
    const index = Math.floor(scrollLeft / 343);

    if (index !== walkThroughNumber) {
      setWalkThroughNumber(index);
    }
  };

  return (
    <article className="relative flex flex-col items-center w-full h-full">
      <div className="absolute top-0 right-0 p-4">
        <button onClick={handleMoveOnboarding} className="text-gray-200 text-medium-14">
          SKIP
        </button>
      </div>

      <div className="h-[200px] w-full px-4">
        <OnBoardingTitle textData={EXPLAIN_DATA} index={walkThroughNumber} />
      </div>
      <ul
        className="w-full h-max flex overflow-x-scroll snap-x snap-mandatory hidden-scrollbar scroll-px-4"
        onScroll={handleScroll}
      >
        <PhoneImage />
        <MegaPhoneImage />
        <CalendarImage />
      </ul>

      <div className="flex gap-4 mt-auto mb-[42px]">
        {Array.from({ length: 3 }, (_, index) => (
          <button
            className={`w-[10px] h-[10px] rounded-full ${walkThroughNumber === index ? "bg-primary-400" : "bg-gray-100"}`}
            key={`button${index}`}
          />
        ))}
      </div>

      <Button type="button" size="xl" className="mb-[40px]" onClick={handleMoveOnboarding}>
        <span className="text-white text-semibold-16">나와 비슷한 팀원 찾기</span>
      </Button>
    </article>
  );
};

export default WalkThrough;
