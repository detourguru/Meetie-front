interface IBadgeCardProps {
  level: number;
  type: string;
  isNew?: boolean;
  showLevel?: boolean;
}

const BadgeCard = ({ level, type, isNew, showLevel }: IBadgeCardProps) => {
  const bgColor = level === 3 ? "bg-primary-500" : "bg-blue-400";
  const opacity = level === 1 && "opacity-50";

  return (
    <>
      <article className="flex flex-col gap-3.5 items-center">
        <img src="comment" alt="comment" />
        <div className="flex flex-col gap-2 items-center">
          <p
            className={`text-semibold-12 relative ${isNew && "after:absolute after:-top-1 after:-right-4 after:rounded-full after:h-3.5 after:w-3.5 after:text-center after:leading-[14px] after:content-['N'] after:text-medium-8 after:text-white after:bg-red-500"}`}
          >
            {type} 뱃지
          </p>
          {showLevel && (
            <div className={`px-2 py-1 rounded-lg text-white text-medium-12 ${bgColor} ${opacity}`}>
              레벨 {level}
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default BadgeCard;
