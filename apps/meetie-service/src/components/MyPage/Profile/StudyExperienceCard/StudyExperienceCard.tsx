import Image from "next/image";

interface IStudyExperienceCard {
  attendanceRate: number;
  satisfaction: number;
  title: string;
}

const StudyExperienceCard = ({ attendanceRate, satisfaction, title }: IStudyExperienceCard) => {
  return (
    <div>
      <div className="flex flex-col w-44 gap-8 p-4 border-2 border-primary-450 rounded-lg bg-primary-50">
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-start">
            <p className="text-bold-18 whitespace-pre-wrap">{title}</p>
            <Image src="/svg/ic-unlock.svg" alt="unlock" width={18} height={18} />
          </div>
          <div className="flex w-fit rounded-lg py-1 px-2.5 bg-[#9470ED]">
            <span className="text-semibold-12 text-white">만족 점수 {satisfaction}점</span>
          </div>
        </div>
        <h1 className="text-regular-14 text-primary-300">#출석율 {attendanceRate}%</h1>
      </div>
    </div>
  );
};

export default StudyExperienceCard;
