import Image from "next/image";

interface TaskConfirmItemProps {
  uploadItem: string;
  handleItemDelete: () => void;
}
const TaskConfirmItem = ({ uploadItem, handleItemDelete }: TaskConfirmItemProps) => {
  return (
    <div className="relative h-[170px] text-[#A9A9A9] text-[15px] bg-[#F9F9F9] border border-[#E9E9E9] rounded-lg drop-shadow-sm my-2 overflow-hidden">
      <button className="absolute top-1 right-1" onClick={handleItemDelete}>
        <Image src="/svg/ic-confirm-btn-delete.svg" alt="del btn" width={17} height={17} />
      </button>
      <Image
        className="w-full h-full object-cover"
        src={uploadItem}
        alt="Uploaded"
        width={340}
        height={170}
      />
    </div>
  );
};

export default TaskConfirmItem;
