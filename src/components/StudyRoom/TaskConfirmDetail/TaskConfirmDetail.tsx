"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import ConfirmComment from "../ConfirmComment/ConfirmComment";

import Header from "@/components/common/Header/Header";

import { useTaskConfirmDetailQuery } from "@/hooks/api/task-confirm/useTaskConfirmDetailQuery";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

import UserImg from "/public/img/img-user-profile.png";

import { convertDate, convertDateTime } from "@/utils/date";

const TaskConfirmDetail = () => {
  const params = useParams();

  const { data } = useTaskConfirmDetailQuery(String(params.id));
  const { userData } = useUserInformationQuery();
  const { userData: AuthorUserData } = useUserInformationQuery(data.data.user_id);

  const isAuthor = userData.data.user_id === AuthorUserData.data.user_id;

  return (
    <>
      <Header>
        <Header.Title hasButton={true}>과제 인증</Header.Title>
        <Header.LeftButton />
      </Header>
      <section className="px-4 pt-14 pb-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src={userData.data.profileImage}
              alt="user profile"
              width={42}
              height={42}
            />
            <p className="text-bold-16">{userData.data.name}</p>
          </div>
          <div className="flex items-center">
            <span className="text-regular-14 text-[#525257] mr-2">사진으로 인증됨</span>
            <Image src="/svg/ic-calendar-check-pri.svg" alt="icon" width={13} height={14} />
            {isAuthor && (
              <Image
                src="/svg/ic-calendar-more.svg"
                alt="icon"
                className="ml-4"
                width={20}
                height={4}
              />
            )}
          </div>
        </div>
      </section>
      <section className="relative px-5 pt-[70px] pb-5 bg-[#FAFAFA] border-t border-b border-[#E6E6E6]">
        <div className="absolute top-[-24px] w-[90%] flex justify-between items-center pl-5 pr-4 py-3 bg-[#F7F3FF] border border-[#CAB4FF] rounded-lg">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full">
              <Image src={UserImg} alt="user image" width={20} height={20} />
            </div>
            <div className="w-5 h-5 rounded-full ml-[-8px]">
              <Image src={UserImg} alt="user image" width={20} height={20} />
            </div>
            <span className="ml-2 text-medium-12 text-[#41364A]">2명이 읽었습니다.</span>
          </div>
          <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={6} height={12} />
        </div>
        <div className="text-regular-14 text-[#41364A]">
          <pre>{data.data.contents}</pre>
          <div className="w-full h-fit py-2 rounded-sm overflow-hidden">
            {data.data.addItems.map((item, index) => (
              <Image
                className="w-full h-auto"
                key={index}
                src={item}
                alt="uploaded"
                width={375}
                height={220}
              />
            ))}
          </div>
          <p className="text-regular-12 text-[#636363] mt-2">
            오전 {convertDateTime(new Date(data.data.created_at))} ･
            {convertDate(new Date(data.data.created_at))} ･ 1일차 과제
          </p>
        </div>
      </section>
      <ConfirmComment />
    </>
  );
};

export default TaskConfirmDetail;
