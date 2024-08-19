import TagButton from "@/components/common/TagButton/TagButton";
import { PURPOSES_DATA } from "@/constants/onBoarding";
import { useState } from "react";

const SecondStep = () => {
  const [clickedPurpose, setClickedPurpose] = useState<string[]>([]);

  const handleClickPurpose = (newPurpose: string) => {
    clickedPurpose.includes(newPurpose)
      ? setClickedPurpose((prevs) => prevs.filter((prev) => prev !== newPurpose))
      : setClickedPurpose((prev) => [...prev, newPurpose]);
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
