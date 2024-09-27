import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentEmojiType } from "@/types/community";

const deleteCommentEmoji = async (postId: number, createEmojiForm: CreateCommentEmojiType) => {
  return await DELETE(
    END_POINTS.COMMUNITY_COMMENT_EMOJI(postId, createEmojiForm.commentId, createEmojiForm.emoji),
    createInit(),
    "커뮤니티 댓글 이모지 삭제 오류",
  );
};

export const useDeleteCommentEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const deleteCommentEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommentEmojiType) =>
      await deleteCommentEmoji(postId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommentEmojiMutation;
};
