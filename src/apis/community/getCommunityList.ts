import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { INITIAL_FILTER_OPTION_DATA } from "@/constants/community";

import type { FilterSelectedType, GetCommunityListResponseType } from "@/types/community";

export const getCommunityList = async (filterOption?: FilterSelectedType) => {
  const options = filterOption ?? INITIAL_FILTER_OPTION_DATA;

  const data = await GET<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST(options.search, options.tags, options.sort, options.date),
    createInit(),
  );

  return data;
};

export const getRecommendedCommunityList = async () => {
  const data = await GET<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST_RECOMMEND,
    createInit(),
  );

  return data;
};
