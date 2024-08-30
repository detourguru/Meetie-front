import Image from "next/image";

import React from "react";

import { Sheet, SheetContent, SheetHeader } from "@/components/common/Sheet/Sheet";

interface TaskConfirmSheetProps {
  isOpen: boolean;
  onInteractOutside?: () => void;
  handleImageUpdate: (uploadType: string, uploadImage: string) => void;
}

const TaskConfirmSheet = ({
  isOpen,
  onInteractOutside,
  handleImageUpdate,
}: TaskConfirmSheetProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const uploadType = e.target.id;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleImageUpdate(uploadType, reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Sheet open={isOpen}>
      <SheetContent
        onInteractOutside={() => {
          onInteractOutside && onInteractOutside();
        }}
      >
        <SheetHeader className="items-center justify-center py-[14px] sticky top-0 bg-[#f9f9f9]">
          <div className="w-[34px] h-[5px] rounded-[2.5px] bg-[#bfbfc1]" />
        </SheetHeader>
        <div className="w-full h-2/5 px-4 py-5 rounded-t-xl bg-[#F9F9F9]">
          <h3 className="text-regular-18 font-semibold">인증 구역</h3>
          <p className="text-regular-12 text-[#9D9D9D]">인증 방식을 선택해주세요!</p>
          <div className="flex justify-center items-center gap-8 h-4/6 mt-[18px] bg-white border border-[#DFDFDF] rounded-lg">
            <div className="flex flex-col items-center pt-11 pb-10">
              <label
                htmlFor="album"
                className="w-[68px] h-[68px] flex justify-center items-center bg-[#917AED] rounded-full mb-1"
              >
                <Image src="/svg/ic-calendar-album.svg" alt="album icon" width={30} height={30} />
              </label>
              <span>앨범</span>
              <input
                onChange={handleFileChange}
                type="file"
                multiple
                accept="image/*"
                id="album"
                hidden
              />
            </div>
            {/* todo: 카메라 업로드 기능 구현 */}
            <div className="flex flex-col items-center">
              <label
                htmlFor="camera"
                className="w-[68px] h-[68px] flex justify-center items-center bg-[#6490DB] rounded-full mb-1"
              >
                <Image src="/svg/ic-calendar-camera.svg" alt="camera icon" width={30} height={30} />
              </label>
              <span>카메라</span>
              <input type="file" capture="environment" accept="image/*" id="camera" hidden />
            </div>
            {/* todo: 링크 업로드 기능 구현 */}
            <div className="flex flex-col items-center">
              <label className="w-[68px] h-[68px] flex justify-center items-center bg-[#5256B5] rounded-full mb-1">
                <Image src="/svg/ic-calendar-link.svg" alt="link icon" width={30} height={30} />
              </label>
              <span>링크</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default TaskConfirmSheet;
