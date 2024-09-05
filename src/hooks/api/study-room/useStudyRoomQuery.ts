import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyRoomResponseType } from "@/types/studyRoom";

export const studyRoomQueryOptions = (
  studyId: string,
): UseSuspenseQueryOptions<GetStudyRoomResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_ROOM, Number(studyId)],
  queryFn: async () => {
    const study = await GET<GetStudyRoomResponseType>(END_POINTS.STUDY_ROOM(studyId), createInit());

    return study;
  },
});

export function useStudyRoomQuery(studyId: string) {
  return useSuspenseQuery(studyRoomQueryOptions(studyId));
}
