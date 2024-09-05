import type { OnboardingTitleDataType } from "@/types/onboarding";

interface OnBoardingTitleProps {
  textData: OnboardingTitleDataType[];
  index: number;
  subTextColor?: "text-black" | "text-gray-200";
}

const OnBoardingTitle = ({
  textData,
  index,
  subTextColor = "text-black",
}: OnBoardingTitleProps) => {
  return (
    <div className="w-full pt-[54px]">
      <div className="mb-[20px]">
        {textData[index].title.map((text, index) => (
          <h1 key={`titleText${index}`} className="text-semibold-24">
            {text}
          </h1>
        ))}
      </div>
      {textData[index].sub.map((text, index) => (
        <p key={`subText${index}`} className={`text-regular-14 ${subTextColor}`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default OnBoardingTitle;
