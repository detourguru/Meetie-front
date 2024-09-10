import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { UpdateCommentFormType } from "@/types/community";

const patchComment = async (postId: number, createiForm: UpdateCommentFormType) => {
  return await PATCH(
    END_POINTS.DELETE_COMMUNITY_COMMENTS(postId, createiForm.id),
    createInit({ contents: createiForm.contents }),
  );
};

export const usePatchCommentiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const patchCommentiMutation = useMutation({
    mutationFn: async (createForm: UpdateCommentFormType) => await patchComment(postId, createForm),
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
