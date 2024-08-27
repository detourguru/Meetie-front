import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { ProfileFormType } from "@/types/userInfo";

export const updateUserInfo = async ({
  id,
  updateprofilForm: createStudyForm,
}: {
  id: number;
  updateprofilForm: ProfileFormType;
}) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const url = `${END_POINTS.USER_INFO}/${id}`;

  return axiosInstance.patch(url, createStudyForm, config);
};
