import { useRouter } from "next/navigation";

import { PATH } from "@/constants/path";

import { useDeleteUserMutation } from "@/hooks/api/userInfo/useDeleteUserMutation";
import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

export const useMyPageMenues = () => {
  const router = useRouter();

  const { userId, user } = useUserInformationQuery();
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();
  const { mutate: deleteUser } = useDeleteUserMutation();

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

  return { userId, user, handleChangeInfoAgreement, handleMovePage, handleWithdrawal };
};
