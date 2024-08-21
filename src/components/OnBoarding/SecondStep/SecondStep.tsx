import type { Dispatch, SetStateAction } from "react";

import TagButton from "@/components/common/TagButton/TagButton";

import { PURPOSES_DATA } from "@/constants/onBoarding";

interface SecondStepProp {
  clickedPurpose: string[];
  setPurpose: Dispatch<SetStateAction<string[]>>;
}

const SecondStep = ({ clickedPurpose, setPurpose }: SecondStepProp) => {
  const handleClickPurpose = (newPurpose: string) => {
    clickedPurpose.includes(newPurpose)
      ? setPurpose((prevs) => prevs.filter((prev) => prev !== newPurpose))
      : setPurpose((prev) => [...prev, newPurpose]);
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PURPOSES_DATA.map((purpose, index) => (
          <TagButton
            key={`purpose${index}`}
            hasIcon
            variant={clickedPurpose.includes(purpose) ? "select" : "default"}
            onClick={() => handleClickPurpose(purpose)}
          >
            {purpose}
          </TagButton>
        ))}
        <TagButton variant="add" />
      </div>
    </div>
  );
};

export default SecondStep;
