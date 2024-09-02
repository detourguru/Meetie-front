import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useDeleteStudyMutation = () => {
  const queryClient = useQueryClient();
  const deleteStudyMutation = useMutation({
    mutationFn: (studyId: string) => DELETE(END_POINTS.STUDY(studyId), createInit()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return deleteStudyMutation;
};
