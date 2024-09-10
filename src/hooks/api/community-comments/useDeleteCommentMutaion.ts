import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useDeleteCommentMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const deleteCommentMutation = useMutation({
    // TODO: 함수 분리
    mutationFn: (commentId: number) =>
      DELETE(END_POINTS.DELETE_COMMUNITY_COMMENTS(postId, commentId), createInit()),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMUNITY, postId, QUERY_KEYS.COMMUNITY_COMMENTS],
      });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommentMutation;
};
