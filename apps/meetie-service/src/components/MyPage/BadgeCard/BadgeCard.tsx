interface BadgeCardProps {
  level: number;
  type: string;
}

const BadgeCard = ({ level, type }: BadgeCardProps) => {
  const bgColor = level === 3 ? "bg-primary-500" : "bg-blue-400";
  const opacity = level === 1 && "opacity-50";

  return (
    <article className="flex flex-col gap-3.5 items-center">
      {/* TODO: svg 아이콘으로 변경 예정 */}
      <img src="comment" alt="comment" />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-semibold-12">{type} 뱃지</p>
        <div className={`px-2 py-1 rounded-lg text-white text-medium-12 ${bgColor} ${opacity}`}>
          레벨 {level}
        </div>
      </div>
    </article>
  );
};

export default BadgeCard;
