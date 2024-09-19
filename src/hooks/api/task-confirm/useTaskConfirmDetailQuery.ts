import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetTaskConfirmResponseType } from "@/types/taskConfirm";

const getTaskConfirmDetail = async (taskId: string) => {
  const data = await GET<GetTaskConfirmResponseType>(
    END_POINTS.TASK_CONFIRM_ID(taskId),
    createInit(),
  );

  return data;
};

export const taskConfirmDetailQueryOptions = (
  taskId: string,
): UseSuspenseQueryOptions<GetTaskConfirmResponseType> => ({
  queryKey: [QUERY_KEYS.TASK_CONFIRM, taskId],
  queryFn: async () => await getTaskConfirmDetail(taskId),
});

export function useTaskConfirmDetailQuery(taskId: string) {
  return useSuspenseQuery(taskConfirmDetailQueryOptions(taskId));
}
