import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyListResponseType } from "@/types/study";

export interface StudyListParam {
  isRecruit?: boolean;
  order?: string;
  asc?: boolean;
}
export const studyListQueryOptions = (
  param?: StudyListParam,
): UseSuspenseQueryOptions<GetStudyListResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_LIST],
  queryFn: async () => {
    const queryString = new URLSearchParams(Object.entries(param ?? {}));
    const studyList = await GET<GetStudyListResponseType>(
      END_POINTS.STUDY_LIST + `?${queryString}`,
      createInit(),
    );

    return studyList;
  },
});

export function useStudyListQuery(param?: StudyListParam) {
  return useSuspenseQuery(studyListQueryOptions(param));
}
