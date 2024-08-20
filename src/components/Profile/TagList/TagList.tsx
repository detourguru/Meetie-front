import Image from "next/image";

import ProfileTag from "@/components/Profile/ProfileTag/ProfileTag";

interface TagListProps {
  isEdit?: boolean;
}

const TagList = ({ isEdit }: TagListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 mt-8">
      <p className="text-bold-18">스터디 태그 {isEdit && "추가"}</p>
      <div className="flex flex-wrap gap-3">
        <ProfileTag title="강의 완강" />
        <ProfileTag title="강의 완강" />

        {isEdit && (
          <button className="w-9 h-9 border border-gray-200 flex justify-center items-center rounded-lg">
            <Image src="/svg/ic-header-plus.svg" alt="plusIcon" width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TagList;
