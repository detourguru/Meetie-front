"use client";

import Link from "next/link";

import Button from "@/components/common/Button/Button";

import { PATH } from "@/constants/path";

import { usePatchStudyMutation } from "@/hooks/api/study/usePatchStudyMutation";

import type { StudyListType } from "@/types/study";

interface FooterBtnProps {
  isOwner: boolean;
  data: StudyListType;
  userId: number;
}

const FooterBtn = ({ isOwner, userId, data }: FooterBtnProps) => {
  const { mutate: patchStudyMutation } = usePatchStudyMutation(data.id);

  const isRequest =
    data.requestMemberList && data.requestMemberList.some((memberId) => memberId === userId);

  const updateData = {
    ...data,
    requestMemberList: isRequest
      ? data.requestMemberList.filter((prevData) => prevData !== userId)
      : data.requestMemberList === null || data.requestMemberList.length === 0
        ? [userId]
        : [data.requestMemberList, userId],
  };

  return (
    <div className="fixed bottom-0 bg-white px-4 py-6 flex gap-5 items-center border-t border-[#dddddd]">
      <div className="flex flex-col items-center">
        <p className="text-medium-12 text-blue-300">참여가능인원</p>
        <p className="text-medium-18">
          <span className="text-primary-500">{data.joinMemberCount}명</span> /{" "}
          <span className="text-[#707070]">{data.recruitMemberCount}명</span>
        </p>
      </div>
      {isOwner ? (
        <Link href={PATH.STUDY_REQUEST(data.id)} scroll={false}>
          <Button variant="disabled" size="md">
            <p className="text-bold-16 text-white">아직 대기 인원이 없습니다</p>
          </Button>
        </Link>
      ) : (
        <Button
          size="md"
          variant={isRequest ? "outlinePrimary" : "default"}
          onClick={() =>
            patchStudyMutation({ createStudyForm: updateData, studyId: String(data.id) })
          }
        >
          <p className={`text-bold-16 ${isRequest ? "text-primary-400" : "text-white"}`}>
            {isRequest ? "신청 취소하기" : "스터디 신청하기"}
          </p>
        </Button>
      )}
    </div>
  );
};

export default FooterBtn;
