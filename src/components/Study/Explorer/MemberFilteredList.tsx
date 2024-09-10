import MemberList from "@/components/Study/Member/MemberList";

import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

const MemberFilteredList = () => {
  const { user } = useUserInformationQuery();

  return (
    <div className="p-4 mb-10">
      <div className="mx-4 bg-[#F5F5FF]">
        <div className="p-4 flex justify-end"></div>
        <MemberList data={user} />
      </div>
    </div>
  );
};

export default MemberFilteredList;
