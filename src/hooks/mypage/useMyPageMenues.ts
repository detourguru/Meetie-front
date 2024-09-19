import { useRouter } from "next/navigation";

import { PATH } from "@/constants/path";

import { useDeleteUserMutation } from "@/hooks/api/userInfo/useDeleteUserMutation";
import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useUserInfoQuery } from "@/hooks/api/userInfo/useUserInfoQuery";

export const useMyPageMenues = () => {
  const router = useRouter();

  const { data: userData } = useUserInfoQuery();
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();
  const { mutate: deleteUser } = useDeleteUserMutation();

  const userId = userData.data.user_id;
  const user = userData.data;
  const userStudyList = userData.data.studyList;
  const userLastStudyList = userData.data.lastStudyList;

  const handleChangeInfoAgreement = () => {
    updateUserInfoMutation({
      id: userId,
      updateUserForm: { informationAgreement: !user.informationAgreement },
    });
  };

  const handleMovePage = (path: string) => router.push(path);

  const handleWithdrawal = () => {
    deleteUser(userId, {
      onSuccess: () => {
        router.replace(PATH.LOGIN);
      },
    });
  };

  return {
    userId,
    user,
    userStudyList,
    userLastStudyList,
    handleChangeInfoAgreement,
    handleMovePage,
    handleWithdrawal,
  };
};
