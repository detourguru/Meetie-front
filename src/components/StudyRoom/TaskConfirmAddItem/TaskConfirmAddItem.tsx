import Image from "next/image";

import React, { useState } from "react";

import TaskConfirmSheet from "@/components/TaskConfirmSheet/TaskConfirmSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

const TaskConfirmAddItem = () => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const [uploadImage, setUploadImage] = useState<string | null>(null);

  const handleImageUpdate = (uploadImage: string | null) => {
    setUploadImage(uploadImage);
  };

  return (
    <section className="flex flex-nowrap gap-3 overflow-x-scroll pt-2">
      <div
        className="flex flex-col items-center justify-center w-[82px] h-[82px] min-w-[82px] border border-[#D5D5D5] rounded-lg bg-[#F9F9F9]"
        onClick={handleOpen}
      >
        <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
        <span className="text-[#797979] text-regular-14 mt-1">0/4</span>
      </div>
      <TaskConfirmSheet
        isOpen={isOpen}
        onInteractOutside={handleClose}
        handleImageUpdate={handleImageUpdate}
      />
      {uploadImage && (
        <div className="relative">
          <div className="w-[82px] h-[82px] absolute top-0 left-0 bg-gray-900/20 flex items-center justify-center rounded-lg">
            <Image src={`/svg/ic-calendar-album.svg`} alt="icon" width={24} height={24} />
          </div>
          <div className="w-[82px] h-[82px] min-w-[82px] border border-[#E9E9E9] rounded-lg overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={uploadImage}
              alt="uploaded"
              width={82}
              height={82}
            />
          </div>
          <button className="absolute top-[-7px] right-[-7px] z-50">
            <Image src="/svg/ic-confirm-btn-delete.svg" alt="del btn" width={17} height={17} />
          </button>
        </div>
      )}
    </section>
  );
};

export default TaskConfirmAddItem;
