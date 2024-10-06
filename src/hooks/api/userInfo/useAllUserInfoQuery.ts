import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { FilterSelectedType } from "@/types/filter";
import type { GetAllUserInfoResponseType } from "@/types/userInfo";

const getAllUserInfo = async (param?: FilterSelectedType) => {
  const queryString = new URLSearchParams(Object.entries(param ?? {}));

  const data = await GET<GetAllUserInfoResponseType>(
    END_POINTS.ONBOARDING + `?${queryString}`,
    createInit(),
  );

  return data;
};

export const userInfoQueryOptions = (
  param?: FilterSelectedType,
): UseSuspenseQueryOptions<GetAllUserInfoResponseType> => ({
  queryKey: [QUERY_KEYS.USER_INFO],
  queryFn: () => getAllUserInfo(param),
});

export const useAllUserInfoQuery = (param?: FilterSelectedType) => {
  return useSuspenseQuery(userInfoQueryOptions(param));
};
