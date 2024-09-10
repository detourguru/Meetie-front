import { type UseSuspenseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { INITIAL_FILTER_OPTION_DATA } from "@/constants/community";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { FilterSelectedType } from "@/types/common";
import type { GetCommunityListResponseType } from "@/types/community";

const getCommunityList = async (filterOption?: FilterSelectedType) => {
  const options = filterOption ?? INITIAL_FILTER_OPTION_DATA;

  const data = await GET<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST(options.search, options.tags, options.sort, options.date),
    createInit(),
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
