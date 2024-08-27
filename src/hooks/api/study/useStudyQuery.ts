import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getStudy } from "@/apis/study/getStudy";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyResponseType } from "@/types/study";

export const useStudyQuery = (studyId: string) => {
  const { data: studyData } = useSuspenseQuery<GetStudyResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.STUDY],
    queryFn: () => getStudy(studyId),
  });

  return { studyData };
};
