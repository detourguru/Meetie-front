import Image from "next/image";

import Member from "@/components/Study/Member/Member";

import { useAllUserInfoQuery } from "@/hooks/api/userInfo/useAllUserInfoQuery";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

const MemberList = () => {
  const { data } = useAllUserInfoQuery();
  const { data: userData } = useUserInfoQuery();

  // FIXME: 탈퇴 유저 flag 값 받아서 분기 태우도록 수정 필요
  const user = data.data.filter(
    (member) => !member.name.includes("탈퇴") && member.user_id !== userData.data.user_id,
  );
  return (
    <>
      {user.length > 0 ? (
        <div className="p-2 w-full grid grid-rows-2 grid-cols-2 gap-2">
          {user && user.map((member) => <Member key={member.id} member={member} />)}
        </div>
      ) : (
        <div className="flex flex-col p-5 w-full">
          <div className="flex justify-center p-4">
            <Image src="/svg/ic-not-found.svg" width={100} height={100} alt="not found" />
          </div>
          <p className="flex justify-center text-bold-18">선택하신 필터에 맞는 멤버가 없습니다.</p>
          <p className="flex justify-center text-regular-14 p-2">
            새로운 필터로 팀원을 검색해보세요!
          </p>
        </div>
      )}
    </>
  );
};
export default MemberList;
