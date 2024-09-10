import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentEmojiType } from "@/types/community";

const postCommentEmoji = async (postId: number, createEmojiForm: CreateCommentEmojiType) => {
  return await POST(
    END_POINTS.POST_COMMUNITY_COMMENT_EMOJI(postId, createEmojiForm.commentId),
    createInit(createEmojiForm),
  );
};

export const usePostCommentEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const postCommentEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommentEmojiType) =>
      await postCommentEmoji(postId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommentEmojiMutation;
};
