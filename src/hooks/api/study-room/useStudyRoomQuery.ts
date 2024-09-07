import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyRoomResponseType } from "@/types/studyRoom";

const getStudyRoom = async (studyId: string) => {
  const data = await GET<GetStudyRoomResponseType>(END_POINTS.STUDY_ROOM(studyId), createInit());

  return data;
};

export const studyRoomQueryOptions = (
  studyId: string,
): UseSuspenseQueryOptions<GetStudyRoomResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_ROOM, Number(studyId)],
  queryFn: () => getStudyRoom(studyId),
});

export function useStudyRoomQuery(studyId: string) {
  return useSuspenseQuery(studyRoomQueryOptions(studyId));
}
