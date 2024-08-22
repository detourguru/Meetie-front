// "use client";

import Image from "next/image";

import { useState } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import { cn } from "@/lib/utils";

import type { CreateStudyFormRequestType } from "@/types/study";

interface JobSheetProps {
  isOpen: boolean;
  onInteractOutside?: () => void;
  createStudyForm: CreateStudyFormRequestType;
  updateInputValue: <Key extends keyof CreateStudyFormRequestType>(
    key: Key,
    value: CreateStudyFormRequestType[Key],
  ) => void;
}

const JobSheet = ({ isOpen, onInteractOutside, updateInputValue }: JobSheetProps) => {
  const [positionList, setPositionList] = useState<string[]>([]);

  const listClassName = "h-[58px] py-5 px-4 [&_p]:text-semibold-16 flex justify-between";

  const handlePositionSelect = async (position: string) => {
    setPositionList((prevPositionList) => [...prevPositionList, position]);
  };

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8"
        onInteractOutside={() => {
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center pt-[14px] pb-[32px] ">
          <SheetTitle>
            <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
          </SheetTitle>
        </SheetHeader>

        <div className="px-5">
          <div className="flex items-center justify-between">
            <h2 className="text-semibold-18">모집 직군</h2>
            <button>
              <span className="text-regular-12 text-gray-250 underline">전체 선택</span>
            </button>
          </div>
          <h3 className="text-gray-250 text-regular-12 mt-1">모집하고 싶은 직군을 선택해주세요!</h3>
          <ul className="rounded-lg bg-white border border-[#dfdfdf] mt-2">
            <li className={listClassName} onClick={() => handlePositionSelect("기획자")}>
              <p>기획자</p>
              <Image
                src="/svg/ic-study-check-disabled.svg"
                alt="checkIcon"
                width={27}
                height={27}
              />
            </li>
            <li
              className={cn(listClassName, "border-y border-[#dfdfdf]")}
              onClick={() => handlePositionSelect("디자이너")}
            >
              <p>디자이너</p>
              <Image
                src="/svg/ic-study-check-disabled.svg"
                alt="checkIcon"
                width={27}
                height={27}
              />
            </li>
            <li className={listClassName} onClick={() => handlePositionSelect("개발자")}>
              <p>개발자</p>
              <Image
                src="/svg/ic-study-check-disabled.svg"
                alt="checkIcon"
                width={27}
                height={27}
              />
            </li>
          </ul>

          <button onClick={() => updateInputValue("position", positionList)}>test</button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default JobSheet;
