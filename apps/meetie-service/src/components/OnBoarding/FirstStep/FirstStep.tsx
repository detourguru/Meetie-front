import { useState } from "react";

const JOBS = ["designer", "developer", "planner"];
const JOBS_KR = ["디자이너", "개발자", "기획자"];

export default function FirstStep() {
  const [clickedJob, setClickedJob] = useState<string | null>(null);

  const handleClickJob = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClickedJob(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col h-full w-full items-center px-[16px]">
      <div className="flex justify-center items-center w-full gap-[8px] pt-[60px]">
        {JOBS.map((job, index) => (
          <button
            key={`jobs${index}`}
            value={job}
            onClick={(e) => handleClickJob(e)}
            className={`w-[109px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[20px] ${
              clickedJob === job
                ? "bg-primary-200 text-primary-500 border border-primary-500 text-medium-16"
                : "bg-gray-50 text-regular-16"
            }`}
          >
            {/* TODO: icon 추가 예정 */}
            <div>아이콘</div>
            <p>{JOBS_KR[index]}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
