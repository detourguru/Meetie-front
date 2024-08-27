import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/common/Tag/Tag";

import { PATH } from "@/constants/path";

import type { StudyListType } from "@/types/study";

interface StudyCardProps {
  studyData: StudyListType;
}

const StudyCard = ({ studyData }: StudyCardProps) => {
  const handleTimeStampFormat = (time: Date | null) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "long",
      timeZone: "Asia/Seoul",
    };

    return time?.toLocaleDateString("ko-KR", options);
  };
  return (
    <Link href={PATH.STUDY(studyData.id)}>
      <div className="mb-4 max-w-full px-4 py-5 rounded-lg bg-white border-2 border-gray-50">
        <div className="flex justify-between mb-3">
          <h2 className="text-bold-14 text-gray-500">{studyData.title}</h2>
          <Image src="/svg/ic-bookmark.svg" alt="icon" width={24} height={24} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {studyData.tagList?.map((tag) => <Tag text={tag} isSmall key={tag} />)}
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-[12px] text-primary-500">D-13</span>
          <div className="flex justify-between">
            <div>
              <Image src="/svg/ic-calandar.svg" alt="icon" width={15} height={15} />
            </div>
            <span className="ml-1 text-regular-12 text-gray-400">
              {`${handleTimeStampFormat(studyData.startDate)} - ${handleTimeStampFormat(studyData.endDate)}`}
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <Image src="/svg/ic-eye.svg" alt="icon" width={14} height={14} />
            </div>
            {/* TODO: view 받도록 수정 */}
            <span className="ml-1 text-regular-12 text-gray-200">823</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StudyCard;
