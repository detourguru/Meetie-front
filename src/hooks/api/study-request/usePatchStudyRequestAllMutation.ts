import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

interface PatchStudyAllRequestProps {
  studyId: string;
}

const patchStudyAllRequest = async ({ studyId }: PatchStudyAllRequestProps) => {
  return await PATCH(
    END_POINTS.STUDY_REQUEST_ALL(studyId),
    createInit(),
    "스터디 인원을 초과합니다",
  );
};

export const usePatchStudyRequestAllMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const patchStudyRequestAllMutation = useMutation({
    mutationFn: ({ studyId }: PatchStudyAllRequestProps) => patchStudyAllRequest({ studyId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchStudyRequestAllMutation;
};
