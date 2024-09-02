import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateStudyFormRequestType } from "@/types/study";

interface PatchStudyProps {
  createStudyForm: CreateStudyFormRequestType;
  studyId: string;
}

export const usePatchStudyMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const patchStudyMutation = useMutation({
    mutationFn: ({ createStudyForm, studyId }: PatchStudyProps) =>
      PATCH(END_POINTS.STUDY(studyId), createInit(createStudyForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchStudyMutation;
};
