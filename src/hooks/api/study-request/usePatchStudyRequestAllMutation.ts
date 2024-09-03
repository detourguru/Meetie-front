import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

interface PatchStudyRequestProps {
  studyId: string;
}

export const usePatchStudyRequestAllMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const patchStudyRequestAllMutation = useMutation({
    mutationFn: ({ studyId }: PatchStudyRequestProps) =>
      PATCH(END_POINTS.STUDY_REQUEST_ALL(studyId), createInit()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchStudyRequestAllMutation;
};
