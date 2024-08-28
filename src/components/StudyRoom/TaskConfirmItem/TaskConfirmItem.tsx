import Image from "next/image";

interface TaskConfirmItemProps {
  uploadType: string;
  uploadImage: string;
  onDelete: () => void;
}
const TaskConfirmItem = ({ uploadType, uploadImage, onDelete }: TaskConfirmItemProps) => {
  return (
    <div className="relative">
      <div className="w-[82px] h-[82px] absolute top-0 left-0 bg-gray-900/20 flex items-center justify-center rounded-lg">
        <Image src={`/svg/ic-calendar-${uploadType}.svg`} alt="icon" width={24} height={24} />
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
      <button className="absolute top-[-7px] right-[-7px] z-50" onClick={onDelete}>
        <Image src="/svg/ic-confirm-btn-delete.svg" alt="del btn" width={17} height={17} />
      </button>
    </div>
  );
};

export default TaskConfirmItem;
