import { axiosInstance } from "../axiosInstance";

import { END_POINTS } from "@/constants/api";

import { createClient } from "@/utils/supabase/client";

import type { GetUserInfoResponseType } from "@/types/userInfo";

export const getUserInfo = async (id?: number) => {
  let params;

  if (id) {
    params = `/${id}`;
  } else {
    const supabase = createClient();

    const user = await supabase.auth.getUser();

    params = `?user_id=${user.data.user?.id}`;
  }

  const { data } = await axiosInstance.get<GetUserInfoResponseType>(
    `${END_POINTS.USER_INFO}${params}`,
  );

  return data;
};
