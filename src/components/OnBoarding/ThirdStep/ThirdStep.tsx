import TagButton from "@/components/common/TagButton/TagButton";

import { STYLES_DATA } from "@/constants/onBoarding";

import type { OnboardingStepProps } from "@/types/onboarding";

const ThirdStep = ({ clicked: clickedStyle, handleClick }: OnboardingStepProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-wrap pt-[60px] gap-2">
        {STYLES_DATA.map((style, index) => (
          <TagButton
            key={`style${index}`}
            value={style}
            variant={clickedStyle.includes(style) ? "select" : "default"}
            onClick={handleClick}
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
