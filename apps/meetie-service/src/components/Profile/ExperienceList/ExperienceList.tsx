import ExperienceCard from "./ExperienceCard/ExperienceCard";

const ExperienceList = () => {
  return (
    <div className="flex flex-col gap-2 px-4 mt-8">
      <p className="text-bold-18">스터디 경험</p>
      <div className="flex gap-4 overflow-x-scroll hidden-scrollbar">
        <ExperienceCard attendanceRate={100} satisfaction={80} title={"피그마 초급\n실습 스터디"} />
        <ExperienceCard attendanceRate={100} satisfaction={80} title={"디자인 기획\n실습 스터디"} />
      </div>
    </div>
  );
};

export default ExperienceList;
