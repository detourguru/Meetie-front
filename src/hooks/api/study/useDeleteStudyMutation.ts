import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteStudy = async (studyId: string) => {
  return await DELETE(END_POINTS.STUDY(studyId), createInit());
};

export const useDeleteStudyMutation = () => {
  const queryClient = useQueryClient();
  const deleteStudyMutation = useMutation({
    mutationFn: deleteStudy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteStudyMutation;
};
