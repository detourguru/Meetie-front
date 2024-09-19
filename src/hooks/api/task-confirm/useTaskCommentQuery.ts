import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

import type { GetTaskCommentResponseType } from "@/types/taskConfirm";

const getTaskComments = async (taskConfirmId: string) => {
  const comments = await GET<GetTaskCommentResponseType>(
    END_POINTS.TASK_COMMENTS(taskConfirmId),
    createInit(),
  );

  return comments;
};

export const taskCommentsQueryOptions = (
  taskConfirmId: string,
): UseSuspenseQueryOptions<GetTaskCommentResponseType> => ({
  queryKey: [],
  queryFn: async () => await getTaskComments(taskConfirmId),
});

export function useTaskCommentQuery(taskConfirmId: string) {
  return useSuspenseQuery(taskCommentsQueryOptions(taskConfirmId));
}
