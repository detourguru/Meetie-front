import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteConfirmEmoji = async (taskConfirmId: number) => {
  return await DELETE(END_POINTS.TASK_EMOJI(taskConfirmId), createInit());
};

export const useDeleteConfirmEmojiMutation = (taskConfirmId: number) => {
  const queryClient = useQueryClient();

  const deleteConfirmEmojiMutation = useMutation({
    mutationFn: async () => await deleteConfirmEmoji(taskConfirmId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASK, taskConfirmId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteConfirmEmojiMutation;
};
