import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

interface PatchStudyRequestProps {
  studyId: string;
  userId: string;
  isReject?: boolean;
}

const patchStudyRequest = async ({ studyId, userId, isReject }: PatchStudyRequestProps) => {
  return await PATCH(
    END_POINTS.STUDY_REQUEST(studyId),
    createInit({ userId, isReject }),
    "스터디 인원을 초과합니다",
  );
};

export const usePatchStudyRequestMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const patchStudyRequestMutation = useMutation({
    mutationFn: patchStudyRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
    },
    onError: (error) => {
      // 에러 토스트 메시지 + boundary
      console.error(error);
    },
  });

  return patchStudyRequestMutation;
};
