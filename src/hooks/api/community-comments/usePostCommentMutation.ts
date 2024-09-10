import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentFormType } from "@/types/community";

export const usePostCommentMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const postCommentMutation = useMutation({
    mutationFn: (createCommentForm: CreateCommentFormType) =>
      POST(END_POINTS.COMMUNITY_COMMENTS(postId), createInit(createCommentForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommentMutation;
};
