import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetScheduleListResponseType } from "@/types/task";

const getScheduleList = async (studyRoomId: string) => {
  const data = await GET<GetScheduleListResponseType>(
    END_POINTS.SCHEDULE_LIST(studyRoomId),
    createInit(),
  );

  return data;
};

export const scheduleListQueryOptions = (
  studyRoomId: string,
): UseSuspenseQueryOptions<GetScheduleListResponseType> => ({
  queryKey: [QUERY_KEYS.SCHEDULE_LIST, studyRoomId],
  queryFn: () => getScheduleList(studyRoomId),
});

export function useScheduleListQuery(studyRoomId: string) {
  return useSuspenseQuery(scheduleListQueryOptions(studyRoomId));
}
