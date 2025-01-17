import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyRoomResponseType } from "@/types/studyRoom";

const getStudyRoom = async (studyRoomId: string) => {
  const data = await GET<GetStudyRoomResponseType>(
    END_POINTS.STUDY_ROOM(studyRoomId),
    createInit(),
  );

  return data;
};

export const studyRoomQueryOptions = (
  studyRoomId: string,
): UseSuspenseQueryOptions<GetStudyRoomResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_ROOM, Number(studyRoomId)],
  queryFn: () => getStudyRoom(studyRoomId),
});

export function useStudyRoomQuery(studyId: string) {
  return useSuspenseQuery(studyRoomQueryOptions(studyId));
}
