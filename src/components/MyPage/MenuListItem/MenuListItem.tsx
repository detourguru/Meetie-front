"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Toggle from "@/components/MyPage/Toggle/Toggle";

interface MenuItemDataType {
  title: string;
  icon?: string;
  navigateTo?: string;
}

interface MenuListItemProps {
  menuItemData: MenuItemDataType;
  isToggle?: boolean;
  isUpdated?: boolean;
  isPrimary?: boolean;
  navigateTo?: string;
  studyCount?: number;
}

const MenuListItem = ({
  menuItemData,
  isToggle,
  isUpdated,
  isPrimary,
  navigateTo,
  studyCount,
}: MenuListItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (menuItemData.navigateTo) {
      router.push(menuItemData.navigateTo);
    } else if (navigateTo) {
      router.push(navigateTo);
    }
    // TODO: 토글 on/off 구현
  };

  return (
    <li onClick={handleClick}>
      <article className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-2 items-center">
          {menuItemData.icon && (
            <Image src={menuItemData.icon} alt="study menu" width={15} height={15} />
          )}
          <p
            className={`text-medium-16 text-gray-600 ${isUpdated && "relative after:absolute after:h-2 after:w-2 after:rounded-full after:top-0 after:-right-2 after:bg-red-500"}`}
          >
            {menuItemData.title}
          </p>
          {studyCount && (
            <div className={isPrimary ? "w-5 h-5 rounded-full bg-blue-100 text-primary-500" : ""}>
              <p className="text-semibold-16 text-center">{studyCount}</p>
            </div>
          )}
        </div>

        {isToggle === undefined ? (
          <Image src="svg/ic-arrow-right.svg" alt="arrow right" width={24} height={24} />
        ) : (
          <Toggle checked={isToggle} />
        )}
      </article>
    </li>
  );
};

export default MenuListItem;
