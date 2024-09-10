import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentEmojiType } from "@/types/community";

export const useDeleteCommentEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const deleteCommentEmojiMutation = useMutation({
    // TODO: 함수 분리
    mutationFn: (createEmojiForm: CreateCommentEmojiType) =>
      DELETE(
        END_POINTS.COMMUNITY_COMMENT_EMOJI(
          postId,
          createEmojiForm.commentId,
          createEmojiForm.emoji,
        ),
        createInit(),
      ),
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
