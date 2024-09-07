import Link from "next/link";

import Button from "@/components/common/Button/Button";

import { PATH } from "@/constants/path";

import { usePatchStudyMutation } from "@/hooks/api/study/usePatchStudyMutation";
import { usePatchStudyRequestAllMutation } from "@/hooks/api/study-request/usePatchStudyRequestAllMutation";
import { useCreateStudyRoom } from "@/hooks/study-room/useCreateStudyRoom";

import type { StudyListType } from "@/types/study";

interface FooterBtnProps {
  isOwner?: boolean;
  data: StudyListType;
  userId?: string;
  isRequestPage?: boolean;
  isJoin?: boolean;
  isRequestEnd?: boolean;
}

const FooterBtn = ({
  isOwner,
  userId,
  data,
  isRequestPage,
  isJoin,
  isRequestEnd,
}: FooterBtnProps) => {
  const { mutate: patchStudyMutation } = usePatchStudyMutation(data.id);
  const { mutate: patchStudyAllMutation } = usePatchStudyRequestAllMutation(data.id);

  const { handleCreateStudyRoom } = useCreateStudyRoom({
    studyRoomRequest: {
      memberList: data.joinMemberList,
      title: data.title,
      endDate: data.endDate,
      owner_id: data.user_id,
      studyId: data.id,
    },
  });

  const isRequest = data.requestMemberList.some((memberId) => memberId === userId);

  const emptyRequestList = data.requestMemberList.length === 0;

  const isFullMemberList = data.recruitMemberCount === data.joinMemberList.length;

  const updateData = {
    ...data,
    requestMemberList: isRequest
      ? data.requestMemberList.filter((prevData) => prevData !== userId)
      : data.requestMemberList.length === 0
        ? [userId]
        : [data.requestMemberList, userId],
  };

  if (isRequestPage) {
    if (isFullMemberList) {
      return (
        <Button size="md" disabled>
          <p className="text-bold-16 text-white">인원초과</p>
        </Button>
      );
    } else {
      return (
        <Button
          size="md"
          disabled={emptyRequestList}
          onClick={() => patchStudyAllMutation({ studyId: String(data.id) })}
        >
          <p className="text-bold-16 text-white">
            {emptyRequestList ? "아직 신청 인원이 없습니다" : "전체 수락하기"}
          </p>
        </Button>
      );
    }
  } else {
    if (isOwner) {
      if (isRequestEnd) {
        return (
          <Button size="md" onClick={handleCreateStudyRoom}>
            <p className="text-bold-16 text-white">스터디 생성하기</p>
          </Button>
        );
      }

      if (emptyRequestList) {
        return (
          <Button variant="disabled" size="md">
            <p className="text-bold-16 text-white">아직 신청 인원이 없습니다</p>
          </Button>
        );
      } else {
        return (
          <Link href={PATH.STUDY_REQUEST(data.id)} scroll={false}>
            <Button size="md">
              <p className="text-bold-16 text-white">대기중인 요청 확인</p>
            </Button>
          </Link>
        );
      }
    } else {
      return (
        <Button
          size="md"
          variant={isRequest ? "outlinePrimary" : "default"}
          disabled={isJoin}
          onClick={() =>
            patchStudyMutation({ createStudyForm: updateData, studyId: String(data.id) })
          }
        >
          <p className={`text-bold-16 ${isRequest ? "text-primary-400" : "text-white"}`}>
            {isRequest ? "신청 취소하기" : isJoin ? "이미 신청한 스터디입니다" : "스터디 신청하기"}
          </p>
        </Button>
      );
    }
  }
};

export default FooterBtn;
