import { type UseSuspenseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetCommunityListResponseType } from "@/types/community";

const getRecommendCommunityList = async () => {
  const data = await GET<GetCommunityListResponseType>(
    END_POINTS.COMMUNITY_LIST_RECOMMEND,
    createInit(),
    "커뮤니티 랜덤 추천 게시글 리스트 조회 오류",
  );

  return data;
};

export const RecommendedCommunityListQueryOptions =
  (): UseSuspenseQueryOptions<GetCommunityListResponseType> => ({
    queryKey: [QUERY_KEYS.COMMUNITY_LIST_RECOMMEND],
    queryFn: async () => await getRecommendCommunityList(),
  });

export const useRandomCommunityListQuery = () => {
  return useSuspenseQuery(RecommendedCommunityListQueryOptions());
};
