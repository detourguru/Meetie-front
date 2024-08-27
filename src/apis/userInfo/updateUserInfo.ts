import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ProfileFormType, UserInformationType } from "@/types/userInfo";

export const updateUserInfo = async ({
  id,
  updateUserForm,
}: {
  id: number;
  updateUserForm: ProfileFormType | Pick<UserInformationType, "informationAgreement">;
}) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const url = `${END_POINTS.USER_INFO}/${id}`;

  return axiosInstance.patch(url, updateUserForm, config);
};
