"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface HeaderProps {
  title: string;
  infoIcon?: ReactNode;
}

const Header = ({ title, infoIcon }: HeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center h-10 pl-1.5 pr-3">
        <button onClick={() => router.back()}>
          {/* TODO: svg 아이콘으로 변경 예정 */}
          <img src="" alt="back" width={40} />
        </button>
        <header className="text-bold-18">{title}</header>
        {infoIcon ? infoIcon : <div className="w-10 h-10" />}
      </div>
    </>
  );
};

export default Header;
