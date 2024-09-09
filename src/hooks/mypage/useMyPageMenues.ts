import { useRouter } from "next/navigation";

import { PATH } from "@/constants/path";

import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

import { createAdminClient } from "@/utils/supabase/admin";

export const useMyPageMenues = () => {
  const router = useRouter();
  const supabase = createAdminClient();

  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();
  const { userId, user } = useUserInformationQuery();

  const handleChangeInfoAgreement = () => {
    updateUserInfoMutation({
      id: userId,
      updateUserForm: { informationAgreement: !user.informationAgreement },
    });
  };

  const handleMovePage = (path: string) => router.push(path);

  const handleWithdrawal = async () => {
    const { error } = await supabase.auth.admin.deleteUser(userId);
    if (!error) {
      router.replace(PATH.LOGIN);
    }
  };

  return { userId, user, handleChangeInfoAgreement, handleMovePage, handleWithdrawal };
};
