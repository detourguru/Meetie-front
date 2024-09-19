import { useRouter } from "next/navigation";

import Image from "@/components/common/Image/Image";

interface InformationDataType {
  title: string;
  icon: string;
}

interface InformationCardProps {
  count: number;
  informationData: InformationDataType;
  navigateTo?: string;
  handleClick?: () => void;
}

const InformationCard = ({
  count,
  informationData,
  navigateTo,
  handleClick,
}: InformationCardProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    if (navigateTo) {
      router.push(navigateTo);
    } else {
      handleClick && handleClick();
    }
  };

  return (
    <article
      className="flex flex-col gap-3 items-center relative after:h-2.5 after:absolute after:top-12 after:-right-0 after:border after:border-primary-200 last:after:hidden"
      onClick={handleNavigate}
    >
      <Image src={informationData.icon} alt={informationData.title} className="w-10 h-10" />
      <div className="flex flex-col gap-2 items-center">
        <p className="text-blue-300 text-regular-16">{informationData.title}</p>
        <p className="text-bold-18">{count}</p>
      </div>
    </article>
  );
};

export default InformationCard;
