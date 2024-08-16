import TagButton from "@/components/common/TagButton/TagButton";
import { useState } from "react";

export default function FourthStep() {
  const PERIODS = ["1개월 이내", "1개월 ~ 3개월", "3개월 ~ 6개월", "6개월 이상"];

  const [clickedPeriod, setClickedPeriod] = useState<string>("");

  const handleClickPeriod = (newPeriod: string) => {
    clickedPeriod !== newPeriod ? setClickedPeriod(newPeriod) : setClickedPeriod("");
  };

  return (
    <div className="flex flex-col items-center w-full h-full px-4">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PERIODS.map((period, index) => (
          <TagButton
            key={`period${index}`}
            hasIcon
            variant={clickedPeriod.includes(period) ? "select" : "default"}
            onClick={() => handleClickPeriod(period)}
          >
            {period}
          </TagButton>
        ))}
      </div>
    </div>
  );
}
