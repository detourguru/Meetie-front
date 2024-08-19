"use client";

import Button from "@/components/common/Button/Button";
import CalendarImage from "@/components/WalkThrough/CalendarImage/CalendarImage";
import MegaPhoneImage from "@/components/WalkThrough/MegaPhoneImage/MegaPhoneImage";
import PhoneImage from "@/components/WalkThrough/PhoneImage/PhoneImage";
import { EXPLAIN_DATA } from "@/constants/walkThrough";
import { useState } from "react";

export default function WalkThroughPage() {
  const [walkThroughNumber, setwalkThroughNumber] = useState(0);

  const handleClickNumber = (newNum: number) => {
    setwalkThroughNumber(newNum);
  };

  return (
    <main className="flex flex-col h-screen">
      <article className="relative flex flex-col items-center w-full h-full px-4">
        <div className="absolute top-0 right-0 p-4">
          <button className="font-normal text-gray-200 uppercase text-medium-14">skip</button>
        </div>

        <div className="w-full pt-[54px]">
          <h1 className="mb-5 text-semibold-24 text-start">
            <span className="block">{EXPLAIN_DATA[walkThroughNumber].TITLE.FIRST}</span>
            <span className="block">{EXPLAIN_DATA[walkThroughNumber].TITLE.SECOND}</span>
          </h1>
          {EXPLAIN_DATA[walkThroughNumber].SUBTEXT.map((text, index) => (
            <p key={`walkthroughSubText${index}`} className="text-regular-14">
              {text}
            </p>
          ))}
        </div>

        <div className="relative w-full h-max">
          {walkThroughNumber === 0 && <PhoneImage />}
          {walkThroughNumber === 1 && <MegaPhoneImage />}
          {walkThroughNumber === 2 && <CalendarImage />}
        </div>

        <div className="flex gap-4 mt-auto mb-[42px]">
          {Array.from({ length: 3 }, (_, index) => (
            <button
              onClick={() => handleClickNumber(index)}
              className={`w-[10px] h-[10px] rounded-full ${walkThroughNumber === index ? "bg-primary-400" : "bg-gray-100"}`}
              key={`button${index}`}
            />
          ))}
        </div>

        <Button type="button" size="xl" className="mb-[40px]">
          <span className="text-white text-semibold-16">나와 비슷한 팀원 찾기</span>
        </Button>
      </article>
    </main>
  );
}
