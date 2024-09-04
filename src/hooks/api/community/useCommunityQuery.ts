import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetCommunityResponseType } from "@/types/community";

export const communityQueryOptions = (
  postId: number,
): UseSuspenseQueryOptions<GetCommunityResponseType> => ({
  queryKey: [QUERY_KEYS.COMMUNITY, postId],
  queryFn: async () => {
    const study = await GET<GetCommunityResponseType>(END_POINTS.COMMUNITY(postId), createInit());

    return study;
  },
});

export function useCommunityQuery(postId: number) {
  return useSuspenseQuery(communityQueryOptions(postId));
}
