import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import { createClient } from "@/utils/supabase/client";

import type { GetUserInfoResponseType } from "@/types/userInfo";

const getUserInfo = async (id?: string) => {
  let url;

  if (id) {
    url = END_POINTS.USER_INFO_BY_ID(id);
  } else {
    const supabase = createClient();

    const user = await supabase.auth.getUser();

    const userId = user.data.user ? user.data.user.id : "";

    url = END_POINTS.USER_INFO_BY_ID(userId);
  }

  const data = await GET<GetUserInfoResponseType>(url, createInit(), "유저 조회 오류");

  return data;
};

export const userInfoQueryOptions = (
  id?: string,
): UseSuspenseQueryOptions<GetUserInfoResponseType> => ({
  queryKey: [QUERY_KEYS.USER_INFO, id ? id : QUERY_KEYS.OWNER_USER],
  queryFn: () => getUserInfo(id),
});

export const useUserInfoQuery = (id?: string) => {
  return useSuspenseQuery(userInfoQueryOptions(id));
};
