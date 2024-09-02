import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getCommunityList, getRecommendCommunityList } from "@/apis/community/getCommunityList";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { FilterSelectedType, GetCommunityListResponseType } from "@/types/community";

export const useCommunityListQuery = (filterOption: FilterSelectedType) => {
  const { data: communityListData } = useSuspenseQuery<GetCommunityListResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.COMMUNITY_LIST],
    queryFn: () => getCommunityList(filterOption),
  });

  return { communityListData };
};

export const useRandomCommunityListQuery = () => {
  const { data: communityListData } = useSuspenseQuery<GetCommunityListResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.COMMUNITY_LIST_RECOMMEND],
    queryFn: () => getRecommendCommunityList(),
  });

  return { communityListData };
};
