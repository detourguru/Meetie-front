import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import { useToast } from "@/hooks/common/useToast";

interface PatchStudyRequestProps {
  studyId: string;
  userId: string;
  isReject?: boolean;
}

const patchStudyRequest = async ({ studyId, userId, isReject }: PatchStudyRequestProps) => {
  return await PATCH(END_POINTS.STUDY_REQUEST(studyId), createInit({ userId, isReject }));
};

export const usePatchStudyRequestMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const toast = useToast();

  const patchStudyRequestMutation = useMutation({
    mutationFn: patchStudyRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
    },
    onError: (error) => {
      if (error.message === "member count error") {
        toast.toast({
          title: "스터디 인원을 초과합니다",
        });
      } else if (error.message === "test error") {
        toast.toast({
          title: "에러 테스트 에러",
        });
      }
    },
  });

  return patchStudyRequestMutation;
};
