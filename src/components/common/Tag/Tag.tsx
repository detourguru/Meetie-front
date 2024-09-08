import Image from "next/image";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  isSmall?: boolean;
  handleDeleteTag?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tag = ({ text, isSmall, handleDeleteTag, ...props }: TagProps) => {
  return (
    <div
      className={`${isSmall ? "py-[2px] px-[8px]" : "py-[6px] px-[10px]"} bg-[#f7f3ff] rounded-lg h-full flex gap-1.5 items-center`}
      {...props}
    >
      <span className={`${isSmall ? "text-regular-12" : "text-regular-14"} text-gray-450`}>
        {text}
      </span>
      {handleDeleteTag && (
        <button onClick={handleDeleteTag}>
          <Image src="/svg/ic-header-close.svg" alt="close" width={14} height={14} />
        </button>
      )}
    </div>
  );
};

export default Tag;
