import { axiosInstance } from "../axiosInstance";

import { END_POINTS } from "@/constants/api";

import { createClient } from "@/utils/supabase/client";

export const getUserInfo = async () => {
  const supabase = createClient();

  const user = await supabase.auth.getUser();
  console.log(user);

  const { data } = await axiosInstance.get(`${END_POINTS.USER_INFO}?user_id=${user.data.user?.id}`);

  return data;
};
