"use client";

import Link from "next/link";

import { useState, useCallback, useEffect } from "react";

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

  const [updateData, setUpdataData] = useState(data);

  const updateValue = useCallback(
    <Key extends keyof StudyListType>(key: Key, value: StudyListType[Key]) => {
      setUpdataData((prevData) => {
        const data = {
          ...prevData,
          [key]: value,
        };

        return data;
      });
    },
    [],
  );

  const isRequest =
    data.requestMemberList && data.requestMemberList.some((memberId) => memberId === userId);

  useEffect(() => {
    updateValue("requestMemberList", [userId]);
  }, []);

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
          disabled={isRequest}
          onClick={() =>
            patchStudyMutation({ createStudyForm: updateData, studyId: String(data.id) })
          }
        >
          <p className="text-bold-16 text-white">
            {isRequest ? "이미 신청된 스터디입니다" : "스터디 신청하기"}
          </p>
        </Button>
      )}
    </div>
  );
};

export default FooterBtn;
