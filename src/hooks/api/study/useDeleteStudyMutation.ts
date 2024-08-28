import { useMutation } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { queryClient } from "@/components/providers/QueryProvider";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useDeleteStudyMutation = () => {
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
