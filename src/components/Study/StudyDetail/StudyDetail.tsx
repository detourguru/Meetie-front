"use client";

import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Tag from "@/components/common/Tag/Tag";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";

import { convertDate, convertDateTime } from "@/utils/date";

const StudyDetail = () => {
  const params = useParams();

  const { studyData } = useStudyQuery(String(params.id));

  const spanClassName =
    "mr-[14px] after:h-[10px] after:w-[1px] after:bg-blue-300 after:inline-block relative after:absolute after:right-[-8px] after:top-[2px]";
  const contentBoxClassName = "flex flex-col gap-2";
  const contentTitleClassName = "text-bold-16 text-[#262626]";
  const contentClassName = "text-regular-14 text-gray-450";

  return (
    <div className="px-4 pt-[64px] pb-[138px]">
      <div className="flex items-center gap-[14px]">
        <h1 className="text-semibold-24">{studyData.data.title}</h1>
        <div className="border border-primary-400 rounded-[20px] py-[4px] px-[14px]">
          <p className="text-medium-12 text-primary-400">D-13</p>
        </div>
      </div>

      <div className="flex gap-2 mt-5">
        {studyData.data.tagList.map((tag) => (
          <Tag text={tag} key={tag} />
        ))}
      </div>

      <div className="flex gap-2 mt-6">
        <Avatar src="/img/img-profile-example.png" size="sm" />
        <div className="flex flex-col gap-1">
          <h3 className="text-bold-14">김서희</h3>
          <p className="text-regular-12 text-blue-300">
            <span className={spanClassName}>
              작성일{convertDate(new Date(studyData.data.createdAt))}
            </span>
            <span className={spanClassName}>
              {convertDateTime(new Date(studyData.data.createdAt))}
            </span>
            <span>조회수 33</span>
          </p>
        </div>
      </div>

      <Divider className="h-[2px] bg-blue-50 mt-3.5" />

      <div className="mt-10 flex flex-col gap-[28px]">
        <div className={contentBoxClassName}>
          <h2 className={contentTitleClassName}>스터디 목표</h2>
          <p className={contentClassName}>{studyData.data.goal}</p>
        </div>
        <div className={contentBoxClassName}>
          <h2 className={contentTitleClassName}>스터디 소개</h2>
          <p className={contentClassName}>{studyData.data.introduce}</p>
        </div>
        <div className={contentBoxClassName}>
          <h2 className={contentTitleClassName}>진행방식과 커리큘럼</h2>
          <p className="text-regular-14 text-gray-450 whitespace-pre-wrap">
            {studyData.data.curriculum}
          </p>
        </div>
        <div className={contentBoxClassName}>
          <h2 className={contentTitleClassName}>스터디 인원</h2>
          <p className={contentClassName}>{studyData.data.personCount}명</p>
        </div>
        <div className={contentBoxClassName}>
          <h2 className={contentTitleClassName}>스터디 기간</h2>
          <div>
            <p className={contentClassName}>
              {convertDate(new Date(studyData.data.startDate ?? new Date()), true)} -{" "}
              {convertDate(new Date(studyData.data.endDate ?? new Date()), true)}
            </p>
            <p className={contentClassName}>
              매주 {studyData.data.week}요일 {studyData.data.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDetail;
