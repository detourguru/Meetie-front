import Member from "@/components/Study/Member/Member";

import { useAllUserInfoQuery } from "@/hooks/api/userInfo/useAllUserInfoQuery";

const MemberList = () => {
  const { data } = useAllUserInfoQuery();
  // FIXME: 탈퇴 유저 flag 값 받아서 분기 태우도록 수정 필요
  const user = data.data.filter((member) => !member.name.includes("탈퇴"));
  return (
    <>
      <div className="p-2 w-full grid grid-rows-2 grid-cols-2 gap-2">
        {user &&
          user.map((member) => (
            <Member
              name={member.name}
              description={member.styles.join("|")}
              field={member.position}
              key={member.id}
              user_id={member.user_id}
            />
          ))}
      </div>
    </>
  );
};
export default MemberList;
