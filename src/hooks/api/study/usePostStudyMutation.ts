import { useMutation } from "@tanstack/react-query";

import { postStudy } from "@/apis/study/postStudy";

import { queryClient } from "@/components/providers/QueryProvider";

import { QUERY_KEYS } from "@/constants/queryKey";

export const usePostStudyMutation = () => {
  const postStudyMutation = useMutation({
    mutationFn: postStudy,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postStudyMutation;
};
