import { axiosInstance } from "../axiosInstance";

import { END_POINTS } from "@/constants/api";

import { createClient } from "@/utils/supabase/client";

import type { GetUserInfoResponseType } from "@/types/userInfo";

export const getUserInfo = async () => {
  const supabase = createClient();

  const user = await supabase.auth.getUser();

  const { data } = await axiosInstance.get<GetUserInfoResponseType>(
    `${END_POINTS.USER_INFO}?user_id=${user.data.user?.id}`,
  );

  return data;
};
