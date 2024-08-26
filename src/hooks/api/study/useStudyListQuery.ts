import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getStudyList } from "@/apis/study/getStudyList";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyListResponseType } from "@/types/study";

export const useStudyListQuery = () => {
  const { data: studyListData } = useSuspenseQuery<GetStudyListResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.STUDY_LIST],
    queryFn: () => getStudyList(),
  });

  return { studyListData };
};
