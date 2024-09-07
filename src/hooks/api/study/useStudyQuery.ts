import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyResponseType } from "@/types/study";

const getStudy = async (studyId: string) => {
  const data = await GET<GetStudyResponseType>(END_POINTS.STUDY(studyId), createInit());

  return data;
};

export const studyQueryOptions = (
  studyId: string,
): UseSuspenseQueryOptions<GetStudyResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY, Number(studyId)],
  queryFn: () => getStudy(studyId),
});

export function useStudyQuery(studyId: string) {
  return useSuspenseQuery(studyQueryOptions(studyId));
}
