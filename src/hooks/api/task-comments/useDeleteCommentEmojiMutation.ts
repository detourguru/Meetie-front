import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentEmojiType } from "@/types/taskConfirm";

const deleteCommentEmoji = async (
  taskConfirmId: string,
  createEmojiForm: CreateCommentEmojiType,
) => {
  return await DELETE(
    END_POINTS.TASK_COMMENT_EMOJI(taskConfirmId, createEmojiForm.commentId, createEmojiForm.emoji),
    createInit(),
  );
};

export const useDeleteCommentEmojiMutation = (taskConfirmId: string) => {
  const queryClient = useQueryClient();

  const deleteCommentEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommentEmojiType) =>
      await deleteCommentEmoji(taskConfirmId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK_CONFIRM, taskConfirmId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommentEmojiMutation;
};
