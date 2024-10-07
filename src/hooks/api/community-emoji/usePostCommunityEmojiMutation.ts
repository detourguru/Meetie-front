import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import { useToast } from "@/hooks/common/useToast";

import type { CreateCommunityEmojiType } from "@/types/community";

const postCommunityEmoji = async (postId: number, createEmojiForm: CreateCommunityEmojiType) => {
  return await POST(END_POINTS.COMMUNITY_EMOJI(postId), createInit(createEmojiForm));
};

export const usePostCommunityEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const { toast } = useToast();

  const postCommunityEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommunityEmojiType) =>
      await postCommunityEmoji(postId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER] });
    },
    onError: (error) => {
      if (error.message === "add emoji error") {
        toast({
          title: "게시글 이모지를 이미 등록했습니다.",
        });
      }
    },
  });

  return postCommunityEmojiMutation;
};
