import { useState } from "react";

type Jobs = "designer" | "developer" | "planner";

export default function OnBoardingFirstStep() {
  const [clickedJob, setClickedJob] = useState<Jobs | null>(null);

  const handleClickJob = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value as Jobs;
    setClickedJob(value);
  };

  return (
    <div className="flex flex-col h-full w-full items-center px-[16px]">
      <div className="flex justify-center items-center w-full gap-[8px] pt-[60px]">
        <button
          value="designer"
          onClick={(e) => handleClickJob(e)}
          className={`w-[109px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[20px] ${
            clickedJob === "designer"
              ? "bg-primary-200 text-primary-500 border border-primary-500 text-medium-16"
              : "bg-gray-50 text-regular-16"
          }`}
        >
          <div>아이콘</div>
          <div>디자이너</div>
        </button>
        <button
          value="developer"
          onClick={(e) => handleClickJob(e)}
          className={`w-[109px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[20px] ${
            clickedJob === "developer"
              ? "bg-primary-200 text-primary-500 border border-primary-500 text-medium-16"
              : "bg-gray-50 text-regular-16"
          }`}
        >
          <div>아이콘</div>
          <div>개발자</div>
        </button>
        <button
          value="planner"
          onClick={(e) => handleClickJob(e)}
          className={`w-[109px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[20px] ${
            clickedJob === "planner"
              ? "bg-primary-200 text-primary-500 border border-primary-500 text-medium-16"
              : "bg-gray-50 text-regular-16"
          }`}
        >
          <div>아이콘</div>
          <div>기획자</div>
        </button>
      </div>
    </div>
  );
}
