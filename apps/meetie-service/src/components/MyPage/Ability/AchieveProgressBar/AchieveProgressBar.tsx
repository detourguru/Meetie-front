import { twJoin } from "tailwind-merge";

interface AchieveProgressBarProps {
  total: number;
  achievedCount: number;
}

const AchieveProgressBar = ({ achievedCount, total }: AchieveProgressBarProps) => {
  const achiecedRate = (achievedCount / total) * 100;

  const getWidth = () => {
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
    <div className="ring-1 ring-[#DCDEFF] rounded-full ring-offset-4 ring-offset-[#7277F0]/10 relative">
      <div className={twJoin(`rounded-full bg-primary-500 h-3`, getWidth())} />
      <p
        className={twJoin(
          "text-medium-14 leading-3 absolute top-0 left-1/2 -translate-x-1/2",
          achiecedRate < 60 ? "text-black" : "text-white",
        )}
      >
        {achievedCount}/{total}
      </p>
    </div>
  );
};

export default AchieveProgressBar;
