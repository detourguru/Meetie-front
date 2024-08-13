import type { ReactNode } from "react";

interface InformationCardProps {
  count: number;
  icon: ReactNode;
  type: string;
}

const InformationCard = ({ count, icon, type }: InformationCardProps) => {
  return (
    <>
      <article className="flex flex-col gap-3 items-center relative after:h-2.5 after:absolute after:top-12 after:-right-0 after:border after:border-primary-200 last:after:hidden">
        {icon}
        <div className="flex flex-col gap-2 items-center">
          <p className="text-blue-300 text-regular-16">{type}</p>
          <p className="text-bold-18">{count}</p>
        </div>
      </article>
    </>
  );
};

export default InformationCard;
