import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { FilterSelectedType, GetCommunityListResponseType } from "@/types/community";

export const getCommunityList = async (filterOption: FilterSelectedType) => {
  const { data } = await axiosInstance.get<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST(filterOption.tags, filterOption.sort, filterOption.date),
  );

  return data;
};

export const getRecommendCommunityList = async () => {
  const { data } = await axiosInstance.get<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST_RECOMMEND,
  );

  return data;
};
