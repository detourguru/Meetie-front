import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { UserInformationType } from "@/types/userInfo";

interface UpdateUserInfoParamsType {
  id: number;
  updateUserForm: Partial<UserInformationType>;
}

export const updateUserInfo = async ({ id, updateUserForm }: UpdateUserInfoParamsType) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axiosInstance.patch(END_POINTS.USER_INFO_BY_ID(id), updateUserForm, config);
};
