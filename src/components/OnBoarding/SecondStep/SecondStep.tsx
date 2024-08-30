import TagButton from "@/components/common/TagButton/TagButton";

import { PURPOSES_DATA } from "@/constants/onBoarding";

import type { OnboardingStepProps } from "@/types/onboarding";

const SecondStep = ({ clicked: clickedPurpose, handleClick }: OnboardingStepProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PURPOSES_DATA.map((purpose, index) => (
          <TagButton
            key={`purpose${index}`}
            value={purpose}
            hasIcon
            variant={clickedPurpose.includes(purpose) ? "select" : "default"}
            onClick={handleClick}
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
