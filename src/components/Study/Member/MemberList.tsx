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
      <div className="p-2 w-full grid grid-rows-2 grid-cols-2 gap-2">
        {user && user.map((member) => <Member key={member.id} member={member} />)}
      </div>
    </>
  );
};
export default MemberList;
