import TagButton from "@/components/common/TagButton/TagButton";

import { PERIODS_DATA } from "@/constants/onBoarding";

interface FourthStepProp {
  clickedPeriod: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FourthStep = ({ clickedPeriod, handleClick }: FourthStepProp) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PERIODS_DATA.map((period, index) => (
          <TagButton
            key={`period${index}`}
            hasIcon
            value={period}
            variant={clickedPeriod && clickedPeriod.includes(period) ? "select" : "default"}
            onClick={(e) => handleClick(e)}
          >
            {period}
          </TagButton>
        ))}
      </div>
    </div>
  );
};

export default FourthStep;
