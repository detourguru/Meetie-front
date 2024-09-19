import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteComment = async (taskConfirmId: string, commentId: string) => {
  return await DELETE(END_POINTS.DELETE_TASK_COMMENTS(taskConfirmId, commentId), createInit());
};

export const useDeleteCommentMutation = (taskConfirmId: string) => {
  const queryClient = useQueryClient();

  const deleteCommentMutation = useMutation({
    mutationFn: async (commentId: string) => await deleteComment(taskConfirmId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK_CONFIRM, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommentMutation;
};
