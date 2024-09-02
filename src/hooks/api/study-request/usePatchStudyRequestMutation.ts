import { useMutation } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

interface PatchStudyRequestProps {
  studyId: string;
  userId: number;
}

export const usePatchStudyRequestMutation = () => {
  const patchStudyRequestMutation = useMutation({
    mutationFn: ({ studyId, userId }: PatchStudyRequestProps) =>
      PATCH(END_POINTS.STUDY_REQUEST(studyId), createInit({ userId })),
  });

  return patchStudyRequestMutation;
};
