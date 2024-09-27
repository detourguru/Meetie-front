import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetBadgeConditionType } from "@/types/badge";

const getBadgeCondition = async () =>
  await GET<GetBadgeConditionType>(END_POINTS.BADGE_CONDITION, createInit(), "뱃지 조건 조회 오류");

export const badgeConditionQueryOptions = (): UseSuspenseQueryOptions<GetBadgeConditionType> => ({
  queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER, QUERY_KEYS.BADGE_CONDITION],
  queryFn: () => getBadgeCondition(),
});

export const useBadgeConditionQuery = () => {
  return useSuspenseQuery(badgeConditionQueryOptions());
};
