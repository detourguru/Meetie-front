import { useRouter } from "next/navigation";

import Image from "@/components/common/Image/Image";

import { PATH } from "@/constants/path";

import { useStudyRoomQuery } from "@/hooks/api/study-room/useStudyRoomQuery";

import { generateDday } from "@/utils/date";

interface StudyItemProps {
  studyId: string;
  studyRoomId: string;
}

const StudyItem = ({ studyId, studyRoomId }: StudyItemProps) => {
  const { data } = useStudyRoomQuery(studyId);

  const router = useRouter();

  return (
    <li
      className="h-[58px] px-4 border-b border-[#dfdfdf] flex justify-between items-center last-of-type:border-none"
      onClick={() => router.push(PATH.STUDY_ROOM(studyId))}
    >
      <div className="flex flex-col">
        <p className="text-semibold-16">{data.data.title}</p>
        <p className="text-medium-12 text-blue-300">
          멤버 {data.data.memberList.length} | {generateDday(data.data.endDate)}
        </p>
      </div>

      {studyRoomId === studyId && (
        <Image src="/svg/ic-study-check.svg" alt="checkIcon" className="w-[27px] h-[17px]" />
      )}
    </li>
  );
};

export default StudyItem;
