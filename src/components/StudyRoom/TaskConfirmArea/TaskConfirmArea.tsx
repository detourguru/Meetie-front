import Image from "next/image";

import TaskConfirmItem from "@/components/StudyRoom/TaskConfirmItem/TaskConfirmItem";
import TaskConfirmSheet from "@/components/StudyRoom/TaskConfirmSheet/TaskConfirmSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { TaskConfirmPostProps } from "@/types/taskConfirm";

const TaskConfirmArea = ({ taskConfirmForm, updateInputValue }: TaskConfirmPostProps) => {
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const MAX_SIZE = 4;

  const handleItemDelete = (items: string[], index: number) =>
    items.filter((_, idx) => index !== idx);

  return (
    <section>
      {taskConfirmForm.addItems.length > 0 ? (
        <>
          {taskConfirmForm.addItems.map((item, index) => (
            <TaskConfirmItem
              key={index}
              uploadItem={item}
              handleItemDelete={() =>
                updateInputValue("addItems", handleItemDelete(taskConfirmForm.addItems, index))
              }
            />
          ))}
          {taskConfirmForm.addItems.length < MAX_SIZE && (
            <div
              className="flex items-center justify-center bg-[#F9F9F9] border border-[#E9E9E9] w-full h-10 rounded-lg mb-2"
              onClick={handleOpen}
            >
              <Image src="/svg/ic-study-plus.svg" alt="icon" width={25} height={24} />
            </div>
          )}
        </>
      ) : (
        <div
          onClick={handleOpen}
          className="flex flex-col items-center justify-center h-[170px] text-[#A9A9A9] text-[15px] bg-[#F9F9F9] border border-[#E9E9E9] rounded-lg drop-shadow-sm my-2"
        >
          <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
          <span className="mt-2">인증 구역</span>
        </div>
      )}
      <p className="text-[13px] text-[#b7b7b7] text-right">
        {taskConfirmForm.addItems.length}/{MAX_SIZE}
      </p>

      <TaskConfirmSheet
        isOpen={isOpen}
        onInteractOutside={handleClose}
        updateInputValue={updateInputValue}
        addItems={taskConfirmForm.addItems}
      />
    </section>
  );
};

export default TaskConfirmArea;
