import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

interface PatchStudyRequestProps {
  studyId: string;
  userId: string;
  isReject?: boolean;
}

export const usePatchStudyRequestMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const patchStudyRequestMutation = useMutation({
    mutationFn: ({ studyId, userId, isReject }: PatchStudyRequestProps) =>
      PATCH(END_POINTS.STUDY_REQUEST(studyId), createInit({ userId, isReject })),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchStudyRequestMutation;
};
