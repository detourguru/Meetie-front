import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentFormType } from "@/types/community";

const postComment = async (taskConfirmId: string, createCommentForm: CreateCommentFormType) => {
  return await POST(END_POINTS.TASK_COMMENTS(taskConfirmId), createInit(createCommentForm));
};

export const usePostCommentMutation = (taskConfirmId: string) => {
  const queryClient = useQueryClient();

  const postCommentMutation = useMutation({
    mutationFn: async (createCommentForm: CreateCommentFormType) =>
      await postComment(taskConfirmId, createCommentForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommentMutation;
};
