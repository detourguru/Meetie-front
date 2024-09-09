import { useState } from "react";

import Button from "@/components/common/Button/Button";
import Image from "@/components/common/Image/Image";
import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";

import { POSITIONS_DATA } from "@/constants/onBoarding";

import { cn } from "@/utils/className";

import type { CommonSheetProps } from "@/types/common";
import type { ProfileFormType, UpdateProfileFormType } from "@/types/userInfo";

interface PositionSheetProps extends CommonSheetProps {
  profileForm: ProfileFormType;
  updateInputValue: UpdateProfileFormType;
}

const PositionSheet = ({
  isOpen,
  onInteractOutside,
  profileForm,
  updateInputValue,
}: PositionSheetProps) => {
  const listClassName = "h-[58px] py-5 px-4 [&_p]:text-semibold-16 flex justify-between";

  const [position, setPosition] = useState<string>(profileForm.position ?? []);

  const handleSelectPosition = async (selectPosition: string) => {
    setPosition(selectPosition);
  };

  return (
    <Sheet open={isOpen}>
      <SheetContent
        className="rounded-tl-lg rounded-tr-lg pb-8"
        onInteractOutside={() => {
          setPosition(profileForm.position);
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center pt-3.5 pb-8 sticky top-0 bg-white z-20">
          <div className="w-[34px] h-[5px] rounded-[4px] bg-[#bfbfc1]" />
        </SheetHeader>

        <div className="px-5">
          <div className="sticky top-[51px] bg-white z-20">
            <div className="flex items-center justify-between">
              <h2 className="text-semibold-18">직무 선택</h2>
            </div>
            <h3 className="text-gray-250 text-regular-12 mt-1">직무를 선택해주세요!</h3>
          </div>
          <ul className="rounded-lg bg-white border border-[#dfdfdf] mt-2 mb-12">
            {POSITIONS_DATA.map((data) => (
              <li
                className={cn(listClassName, "border-b border-[#dfdfdf] last-of-type:border-none")}
                onClick={() => handleSelectPosition(data)}
                key={data}
              >
                <p>{data}</p>
                <Image
                  src={
                    position === data
                      ? "/svg/ic-study-check.svg"
                      : "/svg/ic-study-check-disabled.svg"
                  }
                  alt="checkIcon"
                  className="w-[27px] h-[17px]"
                />
              </li>
            ))}
          </ul>

          <div className="w-full fixed bottom-0 left-0 py-2 bg-white z-20">
            <div className="flex gap-2 justify-center px-3">
              <Button
                variant="outline"
                onClick={() => {
                  setPosition(profileForm.position);
                  onInteractOutside && onInteractOutside();
                }}
                size="xl"
              >
                <p className="text-semibold-16 text-[#adb5bd]">취소</p>
              </Button>
              <Button
                size="xl"
                onClick={() => {
                  updateInputValue("position", position);
                  onInteractOutside && onInteractOutside();
                }}
              >
                <p className="text-semibold-16 text-white">완료</p>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PositionSheet;
