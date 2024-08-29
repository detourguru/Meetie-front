import { useEffect, useState } from "react";

import Button from "@/components/common/Button/Button";
import Image from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";

import { cn } from "@/utils/className";

import type { CommonSheetProps } from "@/types/common";
import type { CreateCommunityFormType, CreateCommunityUpdateHandlerType } from "@/types/community";

export const POSITION_DATA = ["기획", "디자인", "개발"];

interface PositionSheetProps extends CommonSheetProps {
  createPostForm: CreateCommunityFormType;
  updateInputValue: CreateCommunityUpdateHandlerType;
}

const PositionSheet = ({
  isOpen,
  onInteractOutside,
  createPostForm,
  updateInputValue,
}: PositionSheetProps) => {
  const listClassName = "h-[58px] py-5 px-4 [&_p]:text-semibold-16 flex justify-between";

  const [positionList, setPositionList] = useState<string[]>(createPostForm.position ?? []);

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
      setPositionList(POSITION_DATA);
    } else {
      setPositionList([]);
    }
  };

  useEffect(() => {
    if (positionList.length === POSITION_DATA.length) {
      setSelectButtonText("선택 해제");
    } else {
      setSelectButtonText("전체 선택");
    }
  }, [positionList]);

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8"
        onInteractOutside={() => {
          setPositionList(createPostForm.position);
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center pt-[14px] pb-[32px] ">
          <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
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
            {POSITION_DATA.map((position) => (
              <li
                className={cn(listClassName, "border-b border-[#dfdfdf] last-of-type:border-none")}
                onClick={() => handleSelectPosition(position)}
                key={position}
              >
                <p>{position}</p>
                <Image
                  src={
                    positionList.includes(position)
                      ? "/svg/ic-study-check.svg"
                      : "/svg/ic-study-check-disabled.svg"
                  }
                  alt="checkIcon"
                  className="w-[27px] h-[17px]"
                />
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-4 justify-center">
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
