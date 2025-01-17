import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateTaskEmojiType } from "@/types/taskConfirm";

const postConfirmEmoji = async (taskConfirmId: string, createEmojiForm: CreateTaskEmojiType) => {
  return await POST(END_POINTS.TASK_EMOJI(taskConfirmId), createInit(createEmojiForm));
};

export const usePostConfirmEmojiMutation = (taskConfirmId: string) => {
  const queryClient = useQueryClient();

  const postConfirmEmojiMutation = useMutation({
    mutationFn: async (createEmojiForm: CreateTaskEmojiType) =>
      await postConfirmEmoji(taskConfirmId, createEmojiForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASK_CONFIRM, taskConfirmId] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postConfirmEmojiMutation;
};
