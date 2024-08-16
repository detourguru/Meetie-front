"use client";

import Button from "@/components/common/Button/Button";
import CalendarImage from "@/components/WalkThrough/CalendarImage/CalendarImage";
import MegaPhoneImage from "@/components/WalkThrough/MegaPhoneImage/MegaPhoneImage";
import PhoneImage from "@/components/WalkThrough/PhoneImage/PhoneImage";
import { useState } from "react";

export default function WalkThroughPage() {
  const EXPLAIN = [
    {
      TITLE: { FIRST: "다양한 IT직군과의", SECOND: "견고한 스터디를 경험해보세요." },
      SUBTEXT: ["다른 학습자들과 소통하며 함께 성장하세요!"],
    },
    {
      TITLE: { FIRST: "다른 학습자들과", SECOND: "함께 고민을 나눠보세요." },
      SUBTEXT: ["학습에 어려움을 겪고 있나요?", "고민을 나누고 해결책을 찾아보세요!"],
    },
    {
      TITLE: { FIRST: "뱃지를 통해 성취를 경험하고,", SECOND: "차별화된 신뢰지표를 만들어보세요." },
      SUBTEXT: ["스터디 활동을 수행하고 다양한 뱃지를 획득하세요!"],
    },
  ];

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
            <span className="block">{EXPLAIN[walkThroughNumber].TITLE.FIRST}</span>
            <span className="block">{EXPLAIN[walkThroughNumber].TITLE.SECOND}</span>
          </h1>
          {EXPLAIN[walkThroughNumber].SUBTEXT.map((text, index) => (
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
