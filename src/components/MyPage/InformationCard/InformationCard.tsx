import Image from "next/image";
import Link from "next/link";

interface InformationDataType {
  title: string;
  icon: string;
}

interface InformationCardProps {
  count: number;
  informationData: InformationDataType;
  navigateTo: string;
}

const InformationCard = ({ count, informationData, navigateTo }: InformationCardProps) => {
  return (
    <Link href={navigateTo}>
      <article className="flex flex-col gap-3 items-center relative after:h-2.5 after:absolute after:top-12 after:-right-0 after:border after:border-primary-200 last:after:hidden">
        <Image
          src={informationData.icon}
          alt={informationData.title}
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <div className="flex flex-col gap-2 items-center">
          <p className="text-blue-300 text-regular-16">{informationData.title}</p>
          <p className="text-bold-18">{count}</p>
        </div>
      </article>
    </Link>
  );
};

export default InformationCard;
