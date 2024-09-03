import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyListResponseType } from "@/types/study";

export const studyListQueryOptions = (): UseSuspenseQueryOptions<GetStudyListResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_LIST],
  queryFn: async () => {
    const studyList = await GET<GetStudyListResponseType>(END_POINTS.STUDY_LIST, createInit());

    return studyList;
  },
});

export function useStudyListQuery() {
  return useSuspenseQuery(studyListQueryOptions());
}
