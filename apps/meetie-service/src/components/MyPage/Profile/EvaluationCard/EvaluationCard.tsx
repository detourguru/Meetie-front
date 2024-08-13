interface EvaluationCardProps {
  content: string;
  count: number;
}

const EvaluationCard = ({ content, count }: EvaluationCardProps) => {
  return (
    <article className="flex gap-3 items-center py-4 px-5 border border-primary-300 rounded-b-lg rounded-tr-lg">
      <div className="border rounded-full">
        {/* TODO: svg 아이콘으로 변경 예정 */}
        <img src="" alt="manner" width={40} height={40} />
      </div>
      <p className="text-medium-16 grow">{content}</p>
      <p className="font-bold text-primary-500">{count}</p>
    </article>
  );
};

export default EvaluationCard;
