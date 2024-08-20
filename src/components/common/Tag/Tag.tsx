interface TagProps {
  text: string;
  isSmall?: boolean;
}

const Tag = ({ text, isSmall }: TagProps) => {
  return (
    <div
      className={`${isSmall ? "py-[2px] px-[8px]" : "py-[6px] px-[10px]"} bg-[#f7f3ff] rounded-lg h-full`}
    >
      <span className={`${isSmall ? "text-regular-12" : "text-regular-14"} text-gray-450`}>
        {text}
      </span>
    </div>
  );
};

export default Tag;
