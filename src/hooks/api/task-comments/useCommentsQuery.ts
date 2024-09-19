import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetTaskCommentResponseType } from "@/types/taskConfirm";

const getConfirmComments = async (taskConfirmId: string) => {
  const comments = await GET<GetTaskCommentResponseType>(
    END_POINTS.TASK_COMMENTS(taskConfirmId),
    createInit(),
  );

  return comments;
};

export const commentsQueryOptions = (
  taskConfirmId: string,
): UseSuspenseQueryOptions<GetTaskCommentResponseType> => ({
  queryKey: [QUERY_KEYS.TASK_CONFIRM, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
  queryFn: async () => await getConfirmComments(taskConfirmId),
});

export function useCommentsQuery(taskConfirmId: string) {
  return useSuspenseQuery(commentsQueryOptions(taskConfirmId));
}
