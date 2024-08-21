import Image from "next/image";

import { JOBS_DATA, JOBS_KR_DATA } from "@/constants/onBoarding";

interface FirstStepProp {
  clickedJob: string;
  handleClickJob: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FirstStep = ({ clickedJob, handleClickJob }: FirstStepProp) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex justify-center items-center w-full gap-[8px] pt-[60px]">
        {JOBS_DATA.map((job, index) => (
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
            <Image src={`/svg/ic-onboarding-${job}.svg`} width={24} height={24} alt={job} />
            <p>{JOBS_KR_DATA[index]}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
