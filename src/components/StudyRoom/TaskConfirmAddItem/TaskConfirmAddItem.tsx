import Image from "next/image";

import TaskConfirmItem from "@/components/StudyRoom/TaskConfirmItem/TaskConfirmItem";
import TaskConfirmSheet from "@/components/StudyRoom/TaskConfirmSheet/TaskConfirmSheet";

import { useOverlay } from "@/hooks/common/useOverlay";

import type { TaskConfirmPostProps } from "@/types/taskConfirm";

interface TaskAddItemProps extends TaskConfirmPostProps {
  handleImageUpload: (files: FileList | null) => Promise<string[]>;
}
const TaskConfirmAddItem = ({
  taskConfirmForm,
  updateInputValue,
  handleImageUpload,
}: TaskAddItemProps) => {
  const MAX_SIZE = 4;
  const { isOpen, handleOpen, handleClose } = useOverlay();

  const handleItemDelete = (items: string[], index: number) =>
    items.filter((_, idx) => index !== idx);

  return (
    <section className="flex flex-nowrap gap-3 overflow-x-scroll pt-2">
      <div
        className="flex flex-col items-center justify-center w-[82px] h-[82px] min-w-[82px] border border-[#D5D5D5] rounded-lg bg-[#F9F9F9]"
        onClick={handleOpen}
      >
        <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
        <span className="text-[#797979] text-regular-14 mt-1">
          {taskConfirmForm.addItems.length}/{MAX_SIZE}
        </span>
      </div>
      <TaskConfirmSheet
        isOpen={isOpen}
        onInteractOutside={handleClose}
        handleImageUpload={handleImageUpload}
        updateInputValue={updateInputValue}
        confirmImg={taskConfirmForm.confirmImg}
        addItems={taskConfirmForm.addItems}
        itemsType={taskConfirmForm.itemsType}
        isAdditem={true}
      />
      {taskConfirmForm.addItems.map((item, index) => (
        <TaskConfirmItem
          key={index}
          uploadType={taskConfirmForm.itemsType[index]}
          uploadItem={item}
          handleItemDelete={() =>
            updateInputValue("addItems", handleItemDelete(taskConfirmForm.addItems, index))
          }
        />
      ))}
    </section>
  );
};

export default TaskConfirmAddItem;
