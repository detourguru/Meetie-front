import type { ReactNode } from "react";
import Link from "next/link";
import Toggle from "./Toggle";

interface IMenuListItemProps {
  title: string;
  icon?: ReactNode;
  isUpdated?: boolean;
  isPrimary?: boolean;
  navigateTo?: string;
  studyCount?: number;
}

const MenuListItem = ({
  title,
  icon,
  isUpdated,
  isPrimary,
  navigateTo,
  studyCount,
}: IMenuListItemProps) => {
  const ItemContent = () => (
    <div className="flex gap-2 items-center">
      {icon}
      <p
        className={`text-medium-16 text-gray-600 ${isUpdated && "relative after:absolute after:h-2 after:w-2 after:rounded-full after:top-0 after:-right-2 after:bg-red-500"}`}
      >
        {title}
      </p>
      {studyCount && (
        <div className={isPrimary ? "w-5 h-5 rounded-full bg-blue-100 text-primary-500" : ""}>
          <p className="text-semibold-16 text-center">{studyCount}</p>
        </div>
      )}
    </div>
  );

  if (!navigateTo) {
    return (
      <>
        <li>
          <article className="flex justify-between items-center">
            <ItemContent />
            <Toggle checked={true} />
          </article>
        </li>
      </>
    );
  }

  return (
    <>
      <Link href={navigateTo}>
        <li>
          <article className="flex justify-between items-center">
            <ItemContent />
            <div>next</div>
          </article>
        </li>
      </Link>
    </>
  );
};

export default MenuListItem;
