interface HighlightBadgeProps {
  title: string;
  level: number;
  selected?: boolean;
}

const HighlightBadge = ({ level, title, selected }: HighlightBadgeProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-1 px-5 pb-3 pt-1 border-2 border-primary-${selected ? "450" : "200"} rounded-lg bg-primary-50`}
    >
      {/* TODO: svg 아이콘으로 변경 예정 */}
      <img src="" alt="badge" width={100} height={100} />
      <span className="text-semibold-14 text-blue-300">레벨 {level}</span>
      <h1 className="text-semibold-14 text-gray-700">{title}</h1>
    </div>
  );
};

export default HighlightBadge;
