import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

import type { GetTaskConfirmResponseType } from "@/types/taskConfirm";

export const taskConfirmQueryOptions = (
  taskId: string,
): UseSuspenseQueryOptions<GetTaskConfirmResponseType> => ({
  queryKey: [],
  queryFn: async () => {
    const task = await GET<GetTaskConfirmResponseType>(
      END_POINTS.TASK_CONFIRM_ID(taskId),
      createInit(),
    );
    return task;
  },
});

export function useTaskConfirmQuery(taskId: string) {
  return useSuspenseQuery(taskConfirmQueryOptions(taskId));
}
