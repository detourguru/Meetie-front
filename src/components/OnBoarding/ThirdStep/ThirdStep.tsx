import type { Dispatch, SetStateAction } from "react";

import TagButton from "@/components/common/TagButton/TagButton";

import { STYLES_DATA } from "@/constants/onBoarding";

interface ThirdStepProp {
  clickedStyle: string[];
  setStyle: Dispatch<SetStateAction<string[]>>;
}

const ThirdStep = ({ clickedStyle, setStyle }: ThirdStepProp) => {
  const handleClickStyle = (newStyle: string) => {
    clickedStyle.includes(newStyle)
      ? setStyle((prevs) => prevs.filter((prev) => prev !== newStyle))
      : setStyle((prev) => [...prev, newStyle]);
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-wrap pt-[60px] gap-2">
        {STYLES_DATA.map((style, index) => (
          <TagButton
            key={`style${index}`}
            variant={clickedStyle.includes(style) ? "select" : "default"}
            onClick={() => handleClickStyle(style)}
          >
            {style}
          </TagButton>
        ))}
      </div>
      <div className="w-full pt-3">
        <TagButton variant="add" />
      </div>
    </div>
  );
};

export default ThirdStep;
