import Image from "next/image";

interface InformationCardProps {
  count: number;
  iconUrl: string;
  title: string;
}

const InformationCard = ({ count, iconUrl, title }: InformationCardProps) => {
  return (
    <article className="flex flex-col gap-3 items-center relative after:h-2.5 after:absolute after:top-12 after:-right-0 after:border after:border-primary-200 last:after:hidden">
      <Image src={iconUrl} alt={title} width={41} height={41} />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-blue-300 text-regular-16">{title}</p>
        <p className="text-bold-18">{count}</p>
      </div>
    </article>
  );
};

export default InformationCard;
