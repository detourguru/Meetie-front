import Member from "@/components/Study/Member/Member";

import { useAllUserInfoQuery } from "@/hooks/api/userInfo/useAllUserInfoQuery";

const MemberList = () => {
  const { data } = useAllUserInfoQuery();
  return (
    <>
      <div className="p-2 w-full grid grid-rows-2 grid-cols-2 gap-2">
        {data.data &&
          data.data.map((member) => (
            <Member
              name={member.name}
              description={member.styles.join("|")}
              field={member.position}
              key={member.id}
            />
          ))}
      </div>
    </>
  );
};
export default MemberList;
