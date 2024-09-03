import { type UseSuspenseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { getCommunityList, getRecommendCommunityList } from "@/apis/community/getCommunityList";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { FilterSelectedType, GetCommunityListResponseType } from "@/types/community";

export const communityListQueryOptions = (
  filterOption?: FilterSelectedType,
): UseSuspenseQueryOptions<GetCommunityListResponseType> => ({
  queryKey: [QUERY_KEYS.COMMUNITY_LIST],
  queryFn: () => getCommunityList(filterOption),
});

export const randomCommunityListQueryOptions =
  (): UseSuspenseQueryOptions<GetCommunityListResponseType> => ({
    queryKey: [QUERY_KEYS.COMMUNITY_LIST_RECOMMEND],
    queryFn: () => getRecommendCommunityList(),
  });

export const useCommunityListQuery = (filterOption: FilterSelectedType) => {
  return useSuspenseQuery(communityListQueryOptions(filterOption));
};

export const useRandomCommunityListQuery = () => {
  return useSuspenseQuery(randomCommunityListQueryOptions());
};
