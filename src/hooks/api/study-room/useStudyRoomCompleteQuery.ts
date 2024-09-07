import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyRoomResponseType } from "@/types/studyRoom";

const getStudyRoomComplete = async (studyId: string) => {
  const data = await GET<GetStudyRoomResponseType>(
    END_POINTS.STUDY_ROOM_COMPLETE(studyId),
    createInit(),
  );

  return data;
};

export const studyRoomCompleteQueryOptions = (
  studyId: string,
): UseSuspenseQueryOptions<GetStudyRoomResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_ROOM, Number(studyId)],
  queryFn: () => getStudyRoomComplete(studyId),
});

export function useStudyRoomCompleteQuery(studyId: string) {
  return useSuspenseQuery(studyRoomCompleteQueryOptions(studyId));
}
