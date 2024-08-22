import Image from "next/image";

import { useState } from "react";

import Button from "@/components/common/Button/Button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/common/Sheet/Sheet";

import { cn } from "@/lib/utils";

import type { CommonSheetProps } from "@/types/common";
import type { CreateStudyFormRequestType, CreateStudyUpdateHandlerType } from "@/types/study";

const POSITION_DATA = [
  {
    position: "기획자",
  },
  {
    position: "디자이너",
  },
  {
    position: "개발자",
  },
];

interface PositionSheetProps extends CommonSheetProps {
  createStudyForm: CreateStudyFormRequestType;
  updateInputValue: CreateStudyUpdateHandlerType;
}

const PositionSheet = ({
  isOpen,
  onInteractOutside,
  createStudyForm,
  updateInputValue,
}: PositionSheetProps) => {
  const listClassName = "h-[58px] py-5 px-4 [&_p]:text-semibold-16 flex justify-between";

  const [positionList, setPositionList] = useState<string[]>(createStudyForm.position ?? []);

  const [selectButtonText, setSelectButtonText] = useState("전체 선택");

  const handleSelectPosition = async (selectPosition: string) => {
    if (positionList.includes(selectPosition)) {
      setPositionList((prevPositionList) =>
        prevPositionList.filter((position) => position !== selectPosition),
      );
    } else {
      setPositionList((prevPositionList) => [...prevPositionList, selectPosition]);
    }
  };

  const handleSelectAllPosition = (buttonText: string) => {
    if (buttonText === "전체 선택") {
      setPositionList(["기획자", "디자이너", "개발자"]);
      setSelectButtonText("선택 해제");
    } else {
      setPositionList([]);
      setSelectButtonText("전체 선택");
    }
  };

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8"
        onInteractOutside={() => {
          setPositionList(createStudyForm.position);
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
            <button onClick={() => handleSelectAllPosition(selectButtonText)}>
              <span className="text-regular-12 text-gray-250 underline">{selectButtonText}</span>
            </button>
          </div>
          <h3 className="text-gray-250 text-regular-12 mt-1">모집하고 싶은 직군을 선택해주세요!</h3>
          <ul className="rounded-lg bg-white border border-[#dfdfdf] mt-2">
            {POSITION_DATA.map((data) => (
              <li
                className={cn(listClassName, "border-b border-[#dfdfdf] last-of-type:border-none")}
                onClick={() => handleSelectPosition(data.position)}
                key={data.position}
              >
                <p>{data.position}</p>
                <Image
                  src={
                    positionList.includes(data.position)
                      ? "/svg/ic-study-check.svg"
                      : "/svg/ic-study-check-disabled.svg"
                  }
                  alt="checkIcon"
                  width={27}
                  height={27}
                />
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-4">
            <Button variant="outline" onClick={onInteractOutside}>
              <p className="text-semibold-16 text-[#adb5bd]">취소</p>
            </Button>
            <Button
              onClick={() => {
                updateInputValue("position", positionList);
                onInteractOutside && onInteractOutside();
              }}
            >
              <p className="text-semibold-16 text-white">완료</p>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PositionSheet;
