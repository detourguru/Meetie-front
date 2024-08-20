import { twJoin } from "tailwind-merge";

interface AchieveProgressBarProps {
  total: number;
  achievedCount: number;
}

const AchieveProgressBar = ({ achievedCount, total }: AchieveProgressBarProps) => {
  const getWidth = () => {
    const achiecedRate = (achievedCount / total) * 100;

    if (achiecedRate < 30) {
      return "w-1/5";
    } else if (achiecedRate < 50) {
      return "w-2/5";
    } else if (achiecedRate < 70) {
      return "w-3/5";
    } else if (achiecedRate < 100) {
      return "w-4/5";
    } else {
      return "w-full";
    }
  };

  return (
    <div className="ring-1 ring-[#DCDEFF] ring-offset-4 ring-offset-[#7277F0]/10 rounded-full relative">
      <div className={twJoin(`rounded-full bg-[#9ddb02] h-3`, getWidth())} />
      <p className="text-medium-14 leading-3 absolute top-0 left-1/2 -translate-x-1/2">
        {achievedCount}/{total}
      </p>

      <div
        className={twJoin(
          `absolute top-0 mix-blend-difference bg-white rounded-full h-3`,
          getWidth(),
        )}
      />
    </div>
  );
};

export default AchieveProgressBar;
