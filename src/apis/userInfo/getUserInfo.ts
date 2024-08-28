import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import { createClient } from "@/utils/supabase/client";

import type { GetUserInfoResponseType } from "@/types/userInfo";

export const getUserInfo = async (id?: number) => {
  let url;

  if (id) {
    url = END_POINTS.USER_INFO_BY_ID(id);
  } else {
    const supabase = createClient();

    const user = await supabase.auth.getUser();

    const userId = user.data.user ? user.data.user.id : "";

    url = END_POINTS.USER_INFO(userId);
  }

  const { data } = await axiosInstance.get<GetUserInfoResponseType>(url);

  return data;
};
