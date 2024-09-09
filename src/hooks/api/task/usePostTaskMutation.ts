import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateTaskFormRequestType } from "@/types/task";

const postTask = async (createTaskForm: CreateTaskFormRequestType) => {
  return await POST(END_POINTS.POST_TASK, createInit(createTaskForm));
};

export const usePostTaskMutation = () => {
  const queryClient = useQueryClient();

  const postTaskMutation = useMutation({
    mutationFn: postTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return postTaskMutation;
};
