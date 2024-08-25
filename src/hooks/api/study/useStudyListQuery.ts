import { useQuery } from "@tanstack/react-query";

import { getStudyList } from "@/apis/study/getStudyList";

export const useStudyListQuery = () => {
  const { data: studyListData } = useQuery({
    queryKey: ["studyList"],
    queryFn: () => getStudyList(),
  });

  return { studyListData };
};
