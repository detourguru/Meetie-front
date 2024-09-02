import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getCommunityList } from "@/apis/community/getCommunityList";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetCommunityListResponseType } from "@/types/community";

export const useCommunityListQuery = () => {
  const { data: communityListData } = useSuspenseQuery<GetCommunityListResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.COMMUNITY_LIST],
    queryFn: () => getCommunityList(),
  });

  return { communityListData };
};
