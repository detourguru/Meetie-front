"use client";

import { usePathname } from "next/navigation";

export default function OnBoardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const step = pathName.split("/").pop();

  console.log(step);

  return (
    <div className="flex flex-col h-full">
      <div className="p-[16px] flex justify-between items-center text-gray-200 text-medium-14">
        <p>
          <span className="text-black">{step}</span>/4
        </p>
        <button className="uppercase ">skip</button>
      </div>

      <main className="flex flex-col h-max">{children}</main>

      <div className="mt-auto px-[16px] pb-[42px]">
        <p className="text-center text-gray-200 text-medium-12 mb-[13px]">
          내용은 다시 수정할 수 있어요!
        </p>
        <div className="flex items-center gap-[14px]">
          <button className="text-bold-16 w-[124px] h-[49px] text-gray-200 border-gray-100 border rounded-lg">
            이전
          </button>
          <button className="text-bold-16 bg-primary-300 text-white w-[206px] h-[49px] rounded-lg">
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
