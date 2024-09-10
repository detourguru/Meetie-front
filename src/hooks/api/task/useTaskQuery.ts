import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetTaskResponseType } from "@/types/task";

const getTask = async (taskId: string) => {
  const data = await GET<GetTaskResponseType>(END_POINTS.TASK(taskId), createInit());

  return data;
};

export const taskQueryOptions = (taskId: string): UseSuspenseQueryOptions<GetTaskResponseType> => ({
  queryKey: [QUERY_KEYS.TASK, taskId],
  queryFn: () => getTask(taskId),
});

export function useTaskQuery(taskId: string) {
  return useSuspenseQuery(taskQueryOptions(taskId));
}
