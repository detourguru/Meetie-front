import { type UseSuspenseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { INITIAL_FILTER_OPTION_DATA } from "@/constants/community";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetCommunityListResponseType } from "@/types/community";
import type { FilterSelectedType } from "@/types/filter";

const getCommunityList = async (filterOption?: FilterSelectedType) => {
  const options = filterOption ?? INITIAL_FILTER_OPTION_DATA;

  const data = await GET<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST(options.search, options.tags, options.sort, options.date),
    createInit(),
    "커뮤니티 리스트 조회 오류",
  );

  return data;
};

export const communityListQueryOptions = (
  filterOption?: FilterSelectedType,
): UseSuspenseQueryOptions<GetCommunityListResponseType> => ({
  queryKey: [QUERY_KEYS.COMMUNITY_LIST],
  queryFn: async () => await getCommunityList(filterOption),
});

export const useCommunityListQuery = (filterOption: FilterSelectedType) => {
  return useSuspenseQuery(communityListQueryOptions(filterOption));
};
