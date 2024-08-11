interface IStudyExperienceCard {
  attendanceRate: number;
  satisfaction: number;
  title: string;
}

const StudyExperienceCard = ({ attendanceRate, satisfaction, title }: IStudyExperienceCard) => {
  return (
    <>
      <div>
        <div className="flex flex-col w-44 gap-5 px-3 py-2 border-2 border-primary-450 rounded-lg bg-primary-50">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-bold-18 whitespace-pre-wrap">{title}</p>
              <img src="" alt="lock" width={30} height={30} />
            </div>
            <div className="flex w-fit rounded-xl px-3 py-2 bg-primary-350">
              <span className="text-semibold-12 text-white">만족 점수 {satisfaction}점</span>
            </div>
          </div>
          <h1 className="text-regular-14 text-primary-300">#출석율 {attendanceRate}%</h1>
        </div>
      </div>
    </>
  );
};

export default StudyExperienceCard;
