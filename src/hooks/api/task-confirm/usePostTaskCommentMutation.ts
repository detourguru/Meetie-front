import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateTaskCommentFormType } from "@/types/taskConfirm";

const postTaskComment = async (
  taskConfirmId: string,
  createCommentForm: CreateTaskCommentFormType,
) => {
  return await POST(END_POINTS.TASK_COMMENTS(taskConfirmId), createInit(createCommentForm));
};

export const usePostTaskCommentMutation = (taskConfirmId: string) => {
  const queryClient = useQueryClient();

  const postTaskCommentMutation = useMutation({
    mutationFn: async (createTaskCommentForm: CreateTaskCommentFormType) =>
      await postTaskComment(taskConfirmId, createTaskCommentForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK_CONFIRM, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postTaskCommentMutation;
};
