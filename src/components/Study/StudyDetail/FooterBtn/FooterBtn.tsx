"use client";

import Link from "next/link";

import Button from "@/components/common/Button/Button";

import { PATH } from "@/constants/path";

import { usePatchStudyMutation } from "@/hooks/api/study/usePatchStudyMutation";
import { usePatchStudyRequestAllMutation } from "@/hooks/api/study-request/usePatchStudyRequestAllMutation";

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

  const isRequest = data.requestMemberList.some((memberId) => memberId === userId);

  const emptyRequestList = data.requestMemberList.length === 0;

  const updateData = {
    ...data,
    requestMemberList: isRequest
      ? data.requestMemberList.filter((prevData) => prevData !== userId)
      : data.requestMemberList.length === 0
        ? [userId]
        : [data.requestMemberList, userId],
  };

  return (
    <div className="fixed bottom-0 bg-white px-4 py-6 flex gap-5 items-center border-t border-[#dddddd]">
      <div className="flex flex-col items-center">
        <p className="text-medium-12 text-blue-300">{isRequestPage ? "수락" : "참여"}가능인원</p>
        <p className="text-medium-18">
          <span className="text-primary-500">{data.joinMemberList.length}명</span> /{" "}
          <span className="text-[#707070]">{data.recruitMemberCount}명</span>
        </p>
      </div>

      {isRequestPage ? (
        <Button
          size="md"
          disabled={emptyRequestList}
          onClick={() => patchStudyAllMutation({ studyId: String(data.id) })}
        >
          <p className="text-bold-16 text-white">
            {emptyRequestList ? "아직 신청 인원이 없습니다" : "전체 수락하기"}
          </p>
        </Button>
      ) : isOwner ? (
        <>
          {isRequestEnd ? (
            <Button size="md">
              <p className="text-bold-16 text-white">스터디 생성하기</p>
            </Button>
          ) : emptyRequestList ? (
            <Button variant="disabled" size="md">
              <p className="text-bold-16 text-white">아직 신청 인원이 없습니다</p>
            </Button>
          ) : (
            <Link href={PATH.STUDY_REQUEST(data.id)} scroll={false}>
              <Button size="md">
                <p className="text-bold-16 text-white">대기중인 요청 확인</p>
              </Button>
            </Link>
          )}
        </>
      ) : (
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
      )}
    </div>
  );
};

export default FooterBtn;
