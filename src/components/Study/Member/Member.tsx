import Image from "next/image";

import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

interface MemberType {
  name: string;
  field: string;
  description: string;
  user_id: string;
}

const Member = ({ name, field, description, user_id }: MemberType) => {
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();
  const { data, refetch } = useUserInfoQuery();

  const id = data.data.user_id;
  const friendsList = data.data.friendsList;

  const isFriend = friendsList.indexOf(user_id) > 0;

  const handleAddfriend = () => {
    updateUserInfoMutation({
      id,
      updateUserForm: {
        friendsList: isFriend
          ? friendsList.filter((friend) => friend !== user_id)
          : [...friendsList, user_id],
      },
    });
    refetch();
  };

  return (
    <>
      <div className="p-2 bg-white h-[220px] rounded-lg">
        <div className="flex justify-center">
          <Image src="/svg/ic-user.svg" alt="icon" width={60} height={60} />
        </div>
        <div className="flex flex-col p-2">
          <span className="flex justify-center text-bold-14">{name}</span>
          <span className="flex justify-center text-regular-12 mb-2">{field} | UX.UI</span>
          <span className="flex justify-center text-bold-12 h-10">{description}</span>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAddfriend}
            className={`w-full border rounded-lg ${isFriend ? "border-primary-500 text-primary-500" : "border-primary-100 text-primary-100 bg-primary-500"}`}
          >
            {isFriend ? "친구 해제하기 -" : "친구 추가하기 +"}
          </button>
        </div>
      </div>
    </>
  );
};
export default Member;
