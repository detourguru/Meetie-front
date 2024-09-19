import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { TaskConfirmRequestType } from "@/types/taskConfirm";

export const usePostTaskConfirmMutation = () => {
  const queryClient = useQueryClient();

  const postTaskConfirmMutation = useMutation({
    mutationFn: (taskConfirmForm: TaskConfirmRequestType) =>
      POST(END_POINTS.TASK_CONFIRM, createInit(taskConfirmForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASK_CONFIRM_SUCCESS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return postTaskConfirmMutation;
};
