"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import Divider from "@/components/common/Divider/Divider";
import Header from "@/components/common/Header/Header";
import Tag from "@/components/common/Tag/Tag";
import FooterBtnBox from "@/components/Study/StudyDetail/FooterBtnBox/FooterBtnBox";

import { PATH } from "@/constants/path";

import { useStudyQuery } from "@/hooks/api/study/useStudyQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

import { convertDate, convertDateTime, generateDday } from "@/utils/date";

const StudyDetail = () => {
  const params = useParams();

  const { data } = useStudyQuery(String(params.id));
  const { data: userData } = useUserInfoQuery();
  const { data: ownerUserData } = useUserInfoQuery(data.data.user_id);

  const isOwner = userData.data.user_id === ownerUserData.data.user_id;
  const isJoin = data.data.joinMemberList.some((userId) => userId === userData.data.user_id);
  const isRequestEnd = data.data.recruitMemberCount === data.data.joinMemberList.length;

  const spanClassName =
    "mr-[14px] after:h-[10px] after:w-[1px] after:bg-blue-300 after:inline-block relative after:absolute after:right-[-8px] after:top-[2px]";
  const contentBoxClassName = "flex flex-col gap-2";
  const contentTitleClassName = "text-bold-16 text-[#262626]";
  const contentClassName = "text-regular-14 text-gray-450";

  return (
    <>
      <Header>
        <Header.LeftButton />
        {isOwner && (
          <Header.RightTextButton>
            <Link href={PATH.STUDY_EDIT(String(params.id))}>
              <p className="text-medium-14 text-black">수정</p>
            </Link>
          </Header.RightTextButton>
        )}
      </Header>
      <div className="px-4 pt-[64px] pb-[138px]">
        <div className="flex items-center gap-[14px]">
          <h1 className="text-semibold-24">{data.data.title}</h1>
          <div className="border border-primary-400 rounded-[20px] py-[4px] px-[14px]">
            <p className="text-medium-12 text-primary-400">{generateDday(data.data.endDate)}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          {data.data.tagList.map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>

        <div className="flex gap-2 mt-6">
          <Avatar src={ownerUserData.data.profileImage} size="sm" />
          <div className="flex flex-col gap-1">
            <h3 className="text-bold-14">{ownerUserData.data.name}</h3>
            <p className="text-regular-12 text-blue-300">
              <span className={spanClassName}>
                작성일 {convertDate(new Date(data.data.createdAt))}
              </span>
              <span className={spanClassName}>
                {convertDateTime(new Date(data.data.createdAt))}
              </span>
              <span>조회수 33</span>
            </p>
          </div>
        </div>

        <Divider className="h-[2px] bg-blue-50 mt-3.5" />

        <div className="mt-10 flex flex-col gap-[28px]">
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 목표</h2>
            <p className={contentClassName}>{data.data.goal}</p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 소개</h2>
            <p className={contentClassName}>{data.data.introduce}</p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>진행방식과 커리큘럼</h2>
            <p className="text-regular-14 text-gray-450 whitespace-pre-wrap">
              {data.data.curriculum}
            </p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 인원</h2>
            <p className={contentClassName}>{data.data.recruitMemberCount}명</p>
          </div>
          <div className={contentBoxClassName}>
            <h2 className={contentTitleClassName}>스터디 기간</h2>
            <div>
              <p className={contentClassName}>
                {convertDate(data.data.startDate && new Date(data.data.startDate), true)} -{" "}
                {convertDate(data.data.endDate && new Date(data.data.endDate), true)}
              </p>
              <p className={contentClassName}>
                매주 {data.data.week}요일 {data.data.time}
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterBtnBox
        data={data.data}
        isOwner={isOwner}
        userId={userData.data.user_id}
        isJoin={isJoin}
        isRequestEnd={isRequestEnd}
      />
    </>
  );
};

export default StudyDetail;
