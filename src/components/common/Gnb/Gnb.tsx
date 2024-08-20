"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GNB_DATA } from "@/lib/contants";

const Gnb = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-[50%] translate-x-[-50%] w-[375px] h-[60px] bg-white z-50 flex justify-between items-center px-6 py-[10px]">
      {GNB_DATA.map((gnbData) => (
        <Link href={gnbData.link} key={gnbData.text}>
          <div className="flex flex-col items-center">
            <Image
              src={pathname.startsWith(gnbData.rootLink) ? gnbData.icon : gnbData.disabledIcon}
              alt="icon"
              width={24}
              height={24}
            />
            <span
              className={`text-medium-12 ${pathname.startsWith(gnbData.rootLink) ? "text-primary-500" : "text-blue-300"}`}
            >
              {gnbData.text}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gnb;
