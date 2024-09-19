import Link from "next/link";

import Avatar from "@/components/common/Avatar/Avatar";

import { PATH } from "@/constants/path";

import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

import type { UserInformationType } from "@/types/userInfo";

interface MemberType {
  member: UserInformationType;
}

const Member = ({ member }: MemberType) => {
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();
  const { data, refetch } = useUserInfoQuery();

  const id = data.data.user_id;
  const friendsList = data.data.friendsList;

  const isFriend = friendsList.indexOf(member.user_id) > 0;

  const handleAddfriend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateUserInfoMutation({
      id,
      updateUserForm: {
        friendsList: isFriend
          ? friendsList.filter((friend) => friend !== member.user_id)
          : [...friendsList, member.user_id],
      },
    });
    refetch();
  };

  return (
    <Link href={PATH.USER_PROFILE(member.user_id)}>
      <div className="p-3 bg-white rounded-lg">
        <div className="flex justify-center">
          <Avatar src={member.profileImage} className="w-[64px] h-[64px]" />
        </div>
        <div className="flex flex-col p-2">
          <span className="flex justify-center text-bold-12">{member.name}</span>
          <span className="flex justify-center text-gray-200 text-regular-10 mb-2 h-2">
            {member.position}
          </span>
          <span className="flex justify-center text-regular-10 h-7 text-nowrap">
            {member.styles.join("·")}
          </span>
        </div>
        <div className="flex justify-center">
          <button
            onClick={(e) => handleAddfriend(e)}
            className={`w-full border rounded-lg ${isFriend ? "border-primary-500 text-primary-500" : "border-primary-100 text-primary-100 bg-primary-500"}`}
          >
            {isFriend ? "친구 해제하기 -" : "친구 추가하기 +"}
          </button>
        </div>
      </div>
    </Link>
  );
};
export default Member;
