import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommunityEmojiType } from "@/types/community";

const postCommunityEmoji = async (postId: number, createEmojiForm: CreateCommunityEmojiType) => {
  return await POST(
    END_POINTS.COMMUNITY_EMOJI(postId),
    createInit(createEmojiForm),
    "커뮤니티 이모지 추가 오류",
  );
};

export const usePostCommunityEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const postCommunityEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommunityEmojiType) =>
      await postCommunityEmoji(postId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommunityEmojiMutation;
};
