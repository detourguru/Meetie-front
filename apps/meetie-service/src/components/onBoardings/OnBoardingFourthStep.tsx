import { useState } from "react";

export default function OnBoardingFourthStep() {
  const PERIODS = ["1개월 이내", "1개월 ~ 3개월", "3개월 ~ 6개월", "6개월 이상"];

  const [clickedPeriod, setClickedPeriod] = useState<string[]>([]);

  const handleClickPeriod = (newPeriod: string) => {
    if (clickedPeriod.includes(newPeriod)) {
      setClickedPeriod((prevs) => prevs.filter((prev) => prev !== newPeriod));
    } else {
      setClickedPeriod((prev) => [...prev, newPeriod]);
    }
  };
  return (
    <article className="flex flex-col h-full w-full items-center p-[16px]">
      <div className="w-full pt-[60px] flex flex-col gap-[12px] justify-center items-start text-regular-16">
        {PERIODS.map((period) => (
          <button
            value={period}
            onClick={() => handleClickPeriod(period)}
            className={`flex items-center gap-[8px] border p-[10px] rounded-lg ${clickedPeriod.includes(period) ? "border-primary-500 bg-primary-200 text-primary-500" : "border-gray-100"}`}
          >
            <div
              className={`w-[20px] h-[20px] rounded-full ${clickedPeriod.includes(period) ? "bg-primary-500" : "bg-gray-100"}`}
            ></div>
            {period}
          </button>
        ))}
      </div>
    </article>
  );
}
