import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { UpdateCommentFormType } from "@/types/community";

export const usePatchCommentiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const patchCommentiMutation = useMutation({
    // TODO: 함수 분리
    mutationFn: (createiForm: UpdateCommentFormType) =>
      PATCH(
        END_POINTS.DELETE_COMMUNITY_COMMENTS(postId, createiForm.id),
        createInit({ contents: createiForm.contents }),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchCommentiMutation;
};
