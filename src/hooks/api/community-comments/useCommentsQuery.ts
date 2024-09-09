import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetCommentsResponseType } from "@/types/community";

const getCommunityComments = async (postId: number) => {
  const comments = await GET<GetCommentsResponseType>(
    END_POINTS.COMMUNITY_COMMENTS(postId),
    createInit(),
  );

  return comments;
};

export const commentsQueryOptions = (
  postId: number,
): UseSuspenseQueryOptions<GetCommentsResponseType> => ({
  queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
  queryFn: async () => await getCommunityComments(postId),
});

export function useCommentsQuery(postId: number) {
  return useSuspenseQuery(commentsQueryOptions(postId));
}
