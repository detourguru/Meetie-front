import Image from "next/image";

import { useState } from "react";

import TaskConfirmSheet from "@/components/StudyRoom/TaskConfirmSheet/TaskConfirmSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

const TaskConfirmArea = () => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const [uploadImage, setUploadImage] = useState<string>("");

  const handleImageUpdate = (uploadType: string, uploadImage: string) => {
    setUploadImage(uploadImage);
  };

  return (
    <section
      className="h-[170px] text-[#A9A9A9] text-[15px] bg-[#F9F9F9] border border-[#E9E9E9] rounded-lg drop-shadow-sm mt-2 mb-4 overflow-hidden"
      onClick={handleOpen}
    >
      {uploadImage ? (
        <Image className="w-full h-fit" src={uploadImage} alt="Uploaded" width={340} height={170} />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
          <span className="mt-2">인증 구역</span>
          <TaskConfirmSheet
            isOpen={isOpen}
            onInteractOutside={handleClose}
            handleImageUpdate={handleImageUpdate}
          />
        </div>
      )}
    </section>
  );
};

export default TaskConfirmArea;
