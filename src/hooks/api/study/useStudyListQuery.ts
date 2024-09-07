import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyListResponseType } from "@/types/study";

interface StudyListProps {
  isRecruit?: boolean;
  order?: string;
  asc?: boolean;
}

const getStudyList = async (param?: StudyListProps) => {
  const queryString = new URLSearchParams(Object.entries(param ?? {}));

  const data = await GET<GetStudyListResponseType>(
    END_POINTS.STUDY_LIST + `?${queryString}`,
    createInit(),
  );

  return data;
};
export const studyListQueryOptions = (
  param?: StudyListProps,
): UseSuspenseQueryOptions<GetStudyListResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_LIST],
  queryFn: () => getStudyList(param),
});

export function useStudyListQuery(param?: StudyListProps) {
  return useSuspenseQuery(studyListQueryOptions(param));
}
