"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import Avatar from "@/components/common/Avatar/Avatar";
import Header from "@/components/common/Header/Header";
import ConfirmComments from "@/components/StudyRoom/ConfirmComments/ConfirmComments";

import { useTaskConfirmDetailQuery } from "@/hooks/api/task-confirm/useTaskConfirmDetailQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";
import { useGoBack } from "@/hooks/common/useGoBack";

import { convertDate, convertDateTime } from "@/utils/date";

const TaskConfirmDetail = () => {
  const params = useParams();

  const { data } = useTaskConfirmDetailQuery(String(params.id));

  const { data: userData } = useUserInfoQuery();
  const { data: authUserData } = useUserInfoQuery(data.data.user_id);

  const { handleGoBack } = useGoBack();

  const { created_at, emojiList } = data.data;

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={handleGoBack} />
      </Header>
      <section className="px-4 pt-[72px] pb-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Avatar src={authUserData.data.profileImage} size="md" />

            <p className="text-bold-16">{authUserData.data.name}</p>
          </div>
          <div className="flex items-center">
            <span className="text-regular-14 text-[#525257] mr-2">사진으로 인증됨</span>
            <Image src="/svg/ic-calendar-check-pri.svg" alt="icon" width={13} height={14} />
            {/* <Image
              src="/svg/ic-calendar-more.svg"
              alt="icon"
              className="ml-4"
              width={20}
              height={4}
            /> */}
          </div>
        </div>
      </section>

      <section className="px-5 pt-[30px] pb-5 bg-[#FAFAFA] border-t border-b border-[#E6E6E6]">
        <div className="text-regular-14 text-[#41364A]">
          <p>{data.data.contents}</p>
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
            {convertDate(new Date(created_at))} ･ {convertDateTime(new Date(created_at))}
          </p>
        </div>
      </section>
      <ConfirmComments user={userData.data} emojiList={emojiList} />
    </>
  );
};

export default TaskConfirmDetail;
