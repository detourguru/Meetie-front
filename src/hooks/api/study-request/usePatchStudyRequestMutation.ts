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
    "인원 초과된 스터디입니다",
  );
};

export const usePatchStudyRequestMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const patchStudyRequestMutation = useMutation({
    mutationFn: ({ studyId, userId, isReject }: PatchStudyRequestProps) =>
      patchStudyRequest({ studyId, userId, isReject }),
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
