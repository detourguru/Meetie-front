import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommunityEmojiType } from "@/types/community";

export const usePostCommunityEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const postCommunityEmojiMutation = useMutation({
    mutationFn: (createEmojiForm: CreateCommunityEmojiType) =>
      POST(END_POINTS.POST_COMMUNITY_EMOJI(postId), createInit(createEmojiForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommunityEmojiMutation;
};
