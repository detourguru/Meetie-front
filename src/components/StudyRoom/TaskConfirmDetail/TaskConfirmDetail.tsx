"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import ConfirmComment from "../ConfirmComment/ConfirmComment";

import Header from "@/components/common/Header/Header";

import { useTaskConfirmDetailQuery } from "@/hooks/api/task-confirm/useTaskConfirmDetailQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

import { convertDate, convertDateTime } from "@/utils/date";

const TaskConfirmDetail = () => {
  const params = useParams();

  const { data } = useTaskConfirmDetailQuery(String(params.id));
  const { data: userData } = useUserInfoQuery();
  // const { userData: AuthorUserData } = useUserInformationQuery(data.data.user_id);

  // const isAuthor = userData.data.user_id === AuthorUserData.data.user_id;

  return (
    <>
      <Header>
        <Header.LeftButton />
      </Header>
      <section className="px-4 pt-14 pb-4">
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
            {/* {isAuthor && (
              <Image
                src="/svg/ic-calendar-more.svg"
                alt="icon"
                className="ml-4"
                width={20}
                height={4}
              />
            )} */}
          </div>
        </div>
      </section>

      <section className="px-5 pt-[30px] pb-5 bg-[#FAFAFA] border-t border-b border-[#E6E6E6]">
        <div className="text-regular-14 text-[#41364A]">
          <pre>{data.data.contents}</pre>
          <div className="flex flex-col gap-4 py-2 rounded-sm overflow-hidden mt-4">
            {data.data.mediaList.map((item, index) => (
              <Image
                key={`image${index}`}
                src={item}
                alt={`image${index}`}
                width={375}
                height={220}
              />
            ))}
          </div>
          <p className="text-regular-12 text-[#636363] mt-2">
            {convertDate(new Date(data.data.created_at))} ･{" "}
            {convertDateTime(new Date(data.data.created_at))}
          </p>
        </div>
      </section>
      <ConfirmComment />
    </>
  );
};

export default TaskConfirmDetail;
