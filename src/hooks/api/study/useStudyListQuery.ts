import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { FilterSelectedType } from "@/types/filter";
import type { GetStudyListResponseType } from "@/types/study";

const getStudyList = async (param?: FilterSelectedType) => {
  const queryString = new URLSearchParams(Object.entries(param ?? {}));

  const data = await GET<GetStudyListResponseType>(
    END_POINTS.STUDY_LIST + `?${queryString}`,
    createInit(),
    "에러 테스트",
  );

  return data;
};

export const studyListQueryOptions = (
  param?: FilterSelectedType,
): UseSuspenseQueryOptions<GetStudyListResponseType> => ({
  queryKey: [QUERY_KEYS.STUDY_LIST],
  queryFn: () => getStudyList(param),
});

export function useStudyListQuery(param?: FilterSelectedType) {
  return useSuspenseQuery(studyListQueryOptions(param));
}
