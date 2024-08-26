import { useQuery } from "@tanstack/react-query";

import { getStudyList } from "@/apis/study/getStudyList";

import { QUERY_KEYS } from "@/constants/queryKey";

export const useStudyListQuery = () => {
  const { data: studyListData } = useQuery({
    queryKey: [QUERY_KEYS.STUDY_LIST],
    queryFn: () => getStudyList(),
  });

  return { studyListData };
};
