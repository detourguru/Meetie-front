import TagButton from "@/components/common/TagButton/TagButton";
import { PERIODS_DATA } from "@/constants/onBoarding";
import { useState } from "react";

const FourthStep = () => {
  const [clickedPeriod, setClickedPeriod] = useState<string>("");

  const handleClickPeriod = (newPeriod: string) => {
    clickedPeriod !== newPeriod ? setClickedPeriod(newPeriod) : setClickedPeriod("");
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PERIODS_DATA.map((period, index) => (
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
};

export default FourthStep;
