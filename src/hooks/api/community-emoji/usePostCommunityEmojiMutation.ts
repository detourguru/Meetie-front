import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommunityEmojiType } from "@/types/community";

const postCommunityEmoji = async (postId: number, createEmojiForm: CreateCommunityEmojiType) => {
  return await POST(END_POINTS.COMMUNITY_EMOJI(postId), createInit(createEmojiForm));
};

export const usePostCommunityEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const postCommunityEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommunityEmojiType) =>
      await postCommunityEmoji(postId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommunityEmojiMutation;
};
