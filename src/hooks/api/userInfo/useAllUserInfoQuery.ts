import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetAllUserInfoResponseType } from "@/types/userInfo";

const getAllUserInfo = async () => {
  const data = await GET<GetAllUserInfoResponseType>(END_POINTS.ONBOARDING);

  return data;
};

export const userInfoQueryOptions = (): UseSuspenseQueryOptions<GetAllUserInfoResponseType> => ({
  queryKey: [QUERY_KEYS.USER_INFO],
  queryFn: () => getAllUserInfo(),
});

export const useAllUserInfoQuery = () => {
  return useSuspenseQuery(userInfoQueryOptions());
};
