"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface IHeaderProps {
  title: string;
  infoIcon?: ReactNode;
}

const Header = ({ title, infoIcon }: IHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-between items-center h-10 pl-1.5 pr-3">
        <button onClick={() => router.back()}>
          <img src="" alt="back" width={40} />
        </button>
        <header className="text-bold-18">{title}</header>
        {infoIcon ? infoIcon : <div className="w-10 h-10" />}
      </div>
    </>
  );
};

export default Header;
