import Image from "next/image";
import Link from "next/link";

import { format, startOfToday, addDays, differenceInCalendarDays } from "date-fns";
import { ko } from "date-fns/locale";

import Tag from "@/components/common/Tag/Tag";
import Bookmark from "@/components/Study/Bookmark/Bookmark";

import { PATH } from "@/constants/path";

import type { StudyListType } from "@/types/study";

interface StudyCardProps {
  studyData: StudyListType;
}

const StudyCard = ({ studyData }: StudyCardProps) => {
  const newStartDate = studyData.startDate ?? startOfToday();
  const newEndDate = studyData.endDate ?? addDays(newStartDate, 7); // FIXME: null일 때 임의의 7일 added

  const handleGetDateDiff = () => {
    const diff = differenceInCalendarDays(newStartDate, new Date());
    // FIXME: 추후 공통 함수로 적용
    if (diff < 0) {
      return "모집 종료";
    } else if (diff === 0) {
      return "오늘 마감";
    } else {
      return `D-${diff}`;
    }
  };
  return (
    <Link href={PATH.STUDY(studyData.id)}>
      <div className="mb-4 max-w-full px-4 py-5 rounded-lg bg-white border-2 border-gray-50">
        <div className="flex justify-between mb-3">
          <h2 className="text-bold-14 text-gray-500">{studyData.title}</h2>
          <Bookmark isMarked={studyData.bookmarks ? studyData.bookmarks.isMarked : false} />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {studyData.tagList?.map((tag) => <Tag text={tag} isSmall key={tag} />)}
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-[12px] text-primary-500">{handleGetDateDiff()}</span>
          <div className="flex justify-between">
            <div>
              <Image src="/svg/ic-calandar.svg" alt="icon" width={15} height={15} />
            </div>
            <span className="ml-1 text-regular-12 text-gray-400">
              {`${format(newStartDate, "yyyy-MM-dd (EEE)", { locale: ko })} - ${format(newEndDate, "yyyy-MM-dd (EEE)", { locale: ko })}`}
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <Image src="/svg/ic-eye.svg" alt="icon" width={14} height={14} />
            </div>
            {/* TODO: view 받도록 수정 */}
            <span className="ml-1 text-regular-12 text-gray-200">{studyData.viewCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StudyCard;
