"use client";

import { useState } from "react";

export default function WalkThroughPage() {
  const EXPLAIN = [
    {
      TITLE: { FIRST: "김서희님이 관심있는", SECOND: "직무는 무엇인가요?" },
      SUBTEXT: ["선택한 직무를 바탕으로 스터디를 추천해줄게요!"],
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

  const [number, setNumber] = useState(0);

  const handleClickNumber = (newNum: number) => {
    setNumber(newNum);
  };

  return (
    <main className="flex flex-col h-screen">
      <article className="flex relative flex-col h-full w-full items-center px-[16px]">
        <div className="absolute top-0 right-0 p-[16px]">
          <button className="font-normal text-gray-200 uppercase text-medium-14">skip</button>
        </div>

        <div className="w-full pt-[54px]">
          <h1 className="text-semibold-24 text-start mb-[20px]">
            <span className="block">{EXPLAIN[number].TITLE.FIRST}</span>
            <span className="block">{EXPLAIN[number].TITLE.SECOND}</span>
          </h1>
          {EXPLAIN[number].SUBTEXT.map((text) => (
            <p className="text-regular-14">{text}</p>
          ))}
        </div>

        <div className="w-[375px] h-[375px] bg-primary-400">사진</div>

        <div className="flex gap-[16px]">
          <button
            onClick={() => handleClickNumber(0)}
            className={`w-[10px] h-[10px] rounded-full ${number === 0 ? "bg-primary-400" : "bg-gray-100"}`}
          ></button>
          <button
            onClick={() => handleClickNumber(1)}
            className={`w-[10px] h-[10px] rounded-full ${number === 1 ? "bg-primary-400" : "bg-gray-100"}`}
          ></button>
          <button
            onClick={() => handleClickNumber(2)}
            className={`w-[10px] h-[10px] rounded-full ${number === 2 ? "bg-primary-400" : "bg-gray-100"}`}
          ></button>
        </div>

        <button
          type="button"
          className="w-full bg-primary-500 text-semibold-16 h-[49px] text-white rounded-lg mt-auto mb-[42px]"
        >
          나와 비슷한 팀원 찾기
        </button>
      </article>
    </main>
  );
}
