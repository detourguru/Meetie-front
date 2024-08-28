import Image from "next/image";

import React, { useState } from "react";

import TaskConfirmItem from "@/components/StudyRoom/TaskConfirmItem/TaskConfirmItem";
import TaskConfirmSheet from "@/components/TaskConfirmSheet/TaskConfirmSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

interface TaskAddItemProps {
  type: string;
  imageUrl: string;
}
const TaskConfirmAddItem = () => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const [addItems, setAddItems] = useState<TaskAddItemProps[]>([]);

  const handleImageUpdate = (uploadType: string, uploadImage: string | null) => {
    if (uploadImage && addItems.length < 4) {
      setAddItems((prevItems) => [...prevItems, { type: uploadType, imageUrl: uploadImage }]);
    }
  };

  return (
    <section className="flex flex-nowrap gap-3 overflow-x-scroll pt-2">
      <div
        className="flex flex-col items-center justify-center w-[82px] h-[82px] min-w-[82px] border border-[#D5D5D5] rounded-lg bg-[#F9F9F9]"
        onClick={handleOpen}
      >
        <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
        <span className="text-[#797979] text-regular-14 mt-1">{addItems.length}/4</span>
      </div>
      <TaskConfirmSheet
        isOpen={isOpen}
        onInteractOutside={handleClose}
        handleImageUpdate={handleImageUpdate}
      />
      {addItems.map((addItems, index) => (
        <TaskConfirmItem key={index} uploadType={addItems.type} uploadImage={addItems.imageUrl} />
      ))}
    </section>
  );
};

export default TaskConfirmAddItem;
