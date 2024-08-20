import Image from "next/image";

interface EvaluationCardProps {
  content: string;
  count: number;
}

const EvaluationCard = ({ content, count }: EvaluationCardProps) => {
  return (
    <article className="flex gap-3 items-center py-4 px-5 border border-primary-300 rounded-b-lg rounded-tr-lg">
      <Image src="/svg/ic-study-manner.svg" alt="manner" width={35} height={35} />
      <p className="text-medium-16 grow">{content}</p>
      <p className="font-bold text-primary-500">{count}</p>
    </article>
  );
};

export default EvaluationCard;
