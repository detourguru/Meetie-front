"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "@/components/common/Header/Header";
import Member from "@/components/Study/Member/Member";

import { PATH } from "@/constants/path";

import { useAllUserInfoQuery } from "@/hooks/api/userInfo/useAllUserInfoQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

const FriendsList = () => {
  const { back } = useRouter();
  const { data } = useAllUserInfoQuery();
  const { data: userData } = useUserInfoQuery();

  const users = data.data.filter((member) => userData.data.friendsList.includes(member.user_id));

  return (
    <>
      <Header>
        <Header.LeftButton handleButtonClick={() => back()} />
        <Header.Title hasButton>친구 목록</Header.Title>
      </Header>

      {users.length > 0 ? (
        <div className="p-2 w-full grid grid-rows-2 grid-cols-2 gap-2 mt-12">
          {users && users.map((member) => <Member key={member.id} member={member} />)}
        </div>
      ) : (
        <div className="flex flex-col p-5 w-full h-full justify-center">
          <div className="flex justify-center p-4">
            <Image src="/svg/ic-not-found.svg" width={100} height={100} alt="not found" />
          </div>
          <p className="flex justify-center text-bold-18">팔로우한 친구가 없습니다</p>
          <p className="flex justify-center text-regular-14 p-2">새로운 친구를 찾아보세요!</p>
          <Link
            href={PATH.STUDY_EXPLORER}
            className="flex justify-center text-semibold-14 p-2 text-primary-400"
          >
            스터디 및 친구 찾기
          </Link>
        </div>
      )}
    </>
  );
};

export default FriendsList;
