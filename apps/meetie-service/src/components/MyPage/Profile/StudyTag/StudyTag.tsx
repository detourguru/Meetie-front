import Image from "next/image";

interface IStudyTagProps {
  title: string;
}

const StudyTag = ({ title }: IStudyTagProps) => {
  return (
    <div
      className={`flex gap-1.5 items-center py-1.5 px-3 border rounded-lg ${title === "" ? "border-primary-450 bg-primary-100" : "border-gray-200"}`}
    >
      <span className="text-regular-16 text-gray-300">#{title}</span>
      <span className="text-regular-16 text-gray-300">
        {title === "" ? (
          "추가"
        ) : (
          <Image src="/svg/ic-header-close.svg" alt="close" width={14} height={14} />
        )}
      </span>
    </div>
  );
};

export default StudyTag;
