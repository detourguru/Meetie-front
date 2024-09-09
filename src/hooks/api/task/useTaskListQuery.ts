import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetTaskListResponseType } from "@/types/task";

const getTaskList = async (studyRoomId: string) => {
  const data = await GET<GetTaskListResponseType>(END_POINTS.TASK_LIST(studyRoomId), createInit());

  return data;
};

export const taskListQueryOptions = (
  studyRoomId: string,
): UseSuspenseQueryOptions<GetTaskListResponseType> => ({
  queryKey: [QUERY_KEYS.TASK_LIST, studyRoomId],
  queryFn: () => getTaskList(studyRoomId),
});

export function useTaskListQuery(studyRoomId: string) {
  return useSuspenseQuery(taskListQueryOptions(studyRoomId));
}
