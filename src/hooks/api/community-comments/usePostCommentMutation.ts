import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommentFormType } from "@/types/community";

const postComment = async (postId: number, createCommentForm: CreateCommentFormType) => {
  return await POST(END_POINTS.COMMUNITY_COMMENTS(postId), createInit(createCommentForm));
};

export const usePostCommentMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const postCommentMutation = useMutation({
    mutationFn: async (createCommentForm: CreateCommentFormType) =>
      await postComment(postId, createCommentForm),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommentMutation;
};
