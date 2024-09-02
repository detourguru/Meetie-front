import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { GetCommunityListResponseType } from "@/types/community";

export const getCommunityList = async () => {
  const { data } = await axiosInstance.get<GetCommunityListResponseType>(END_POINTS.COMMUNITY_LIST);

  return data;
};
