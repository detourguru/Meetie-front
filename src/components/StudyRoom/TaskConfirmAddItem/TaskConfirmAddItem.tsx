import Image from "next/image";

import React, { useState } from "react";

import TaskConfirmItem from "@/components/StudyRoom/TaskConfirmItem/TaskConfirmItem";
import TaskConfirmSheet from "@/components/TaskConfirmSheet/TaskConfirmSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

const TaskConfirmAddItem = () => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [uploadType, setUploadType] = useState<string>("");

  const handleImageUpdate = (uploadType: string, uploadImage: string | null) => {
    setUploadImage(uploadImage);
    setUploadType(uploadType);
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
      {uploadImage && <TaskConfirmItem uploadType={uploadType} uploadImage={uploadImage} />}
    </section>
  );
};

export default TaskConfirmAddItem;
