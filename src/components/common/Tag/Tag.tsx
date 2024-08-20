interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className="py-[6px] px-[10px] bg-[#f7f3ff] rounded-lg">
      <span className="text-gray-450 text-regular-14">{text}</span>
    </div>
  );
};

export default Tag;
