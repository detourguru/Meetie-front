import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

import type { GetTaskCommentResponseType } from "@/types/taskConfirm";

const getTaskComments = async (taskConfirmId: number) => {
  const comments = await GET<GetTaskCommentResponseType>(
    END_POINTS.TASK_COMMENTS(taskConfirmId),
    createInit(),
  );

  return comments;
};

export const taskCommentsQueryOptions = (
  taskConfirmId: number,
): UseSuspenseQueryOptions<GetTaskCommentResponseType> => ({
  queryKey: [],
  queryFn: async () => await getTaskComments(taskConfirmId),
});

export function useTaskCommentQuery(taskConfirmId: number) {
  return useSuspenseQuery(taskCommentsQueryOptions(taskConfirmId));
}
