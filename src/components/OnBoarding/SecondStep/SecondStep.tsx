import TagButton from "@/components/common/TagButton/TagButton";

import { PURPOSES_DATA } from "@/constants/onBoarding";

interface SecondStepProp {
  clickedPurpose: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SecondStep = ({ clickedPurpose, handleClick }: SecondStepProp) => {
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
