import type { Dispatch, SetStateAction } from "react";

import TagButton from "@/components/common/TagButton/TagButton";

import { PERIODS_DATA } from "@/constants/onBoarding";

interface FourthStepProp {
  clickedPeriod: string;
  setPeriod: Dispatch<SetStateAction<string>>;
}

const FourthStep = ({ clickedPeriod, setPeriod }: FourthStepProp) => {
  const handleClickPeriod = (newPeriod: string) => {
    clickedPeriod !== newPeriod ? setPeriod(newPeriod) : setPeriod("");
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PERIODS_DATA.map((period, index) => (
          <TagButton
            key={`period${index}`}
            hasIcon
            variant={clickedPeriod && clickedPeriod.includes(period) ? "select" : "default"}
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
