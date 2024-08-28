import { useMutation } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { queryClient } from "@/components/providers/QueryProvider";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateStudyFormRequestType } from "@/types/study";

interface PatchStudyRequestProps {
  createStudyForm: CreateStudyFormRequestType;
  studyId: string;
}

export const usePatchStudyMutation = () => {
  const patchStudyMutation = useMutation({
    mutationFn: ({ createStudyForm, studyId }: PatchStudyRequestProps) =>
      PATCH(END_POINTS.STUDY(studyId), createInit(createStudyForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return patchStudyMutation;
};
