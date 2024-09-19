import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentEmojiType } from "@/types/taskConfirm";

const postCommentEmoji = async (taskConfirmId: string, createEmojiForm: CreateCommentEmojiType) => {
  return await POST(
    END_POINTS.POST_TASK_COMMENT_EMOJI(taskConfirmId, createEmojiForm.commentId),
    createInit(createEmojiForm),
  );
};

export const usePostCommentEmojiMutation = (taskConfirmId: string) => {
  const queryClient = useQueryClient();

  const postCommentEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateCommentEmojiType) =>
      await postCommentEmoji(taskConfirmId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommentEmojiMutation;
};
