interface TitleDataTypes {
  TITLE: {
    FIRST: string;
    SECOND: string;
  };
  SUBTEXT: string[];
}

interface OnBoardingTitleProps {
  textData: TitleDataTypes[];
  index: number;
  subTextColor?: "text-black" | "text-gray-200";
}

const OnBoardingTitle = ({
  textData,
  index,
  subTextColor = "text-black",
}: OnBoardingTitleProps) => {
  return (
    <div className="w-full pt-[54px] px-4">
      <div className="mb-[20px]">
        <h1 className="text-semibold-24">{textData[index].TITLE.FIRST}</h1>
        <h1 className="text-semibold-24">{textData[index].TITLE.SECOND}</h1>
      </div>
      {textData[index].SUBTEXT.map((text, index) => (
        <p key={`subText${index}`} className={`text-regular-14 ${subTextColor}`}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default OnBoardingTitle;
