import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import { useToast } from "@/hooks/common/useToast";

interface PatchStudyAllRequestProps {
  studyId: string;
}

const patchStudyAllRequest = async ({ studyId }: PatchStudyAllRequestProps) => {
  return await PATCH(END_POINTS.STUDY_REQUEST_ALL(studyId), createInit());
};

export const usePatchStudyRequestAllMutation = (studyId: string) => {
  const queryClient = useQueryClient();

  const toast = useToast();

  const patchStudyRequestAllMutation = useMutation({
    mutationFn: patchStudyAllRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY, Number(studyId)] });
    },
    onError: (error) => {
      if (error.message === "member count error") {
        toast.toast({
          title: "스터디 인원을 초과합니다",
        });
      }
    },
  });

  return patchStudyRequestAllMutation;
};
