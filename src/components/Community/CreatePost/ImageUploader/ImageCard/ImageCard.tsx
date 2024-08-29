import Image from "@/components/common/Image/Image";

interface ImageCardProps {
  imageUrl: string;
  handleDelete: () => void;
}

const ImageCard = ({ imageUrl, handleDelete }: ImageCardProps) => {
  return (
    <div className="relative">
      <Image
        className="w-[82px] h-[82px] border border-[#E9E9E9] rounded-lg"
        src={imageUrl}
        alt="uploaded"
      />
      <button className="absolute top-[-7px] right-[-7px] z-50" onClick={handleDelete}>
        <Image src="/svg/ic-confirm-btn-delete.svg" alt="del btn" className="w-[17px] h-[17px]" />
      </button>
    </div>
  );
};
export default ImageCard;
