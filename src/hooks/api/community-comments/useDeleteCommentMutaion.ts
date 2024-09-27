import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteComment = async (postId: number, commentId: number) => {
  return await DELETE(
    END_POINTS.DELETE_COMMUNITY_COMMENTS(postId, commentId),
    createInit(),
    "커뮤니티 댓글 삭제 오류",
  );
};

export const useDeleteCommentMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const deleteCommentMutation = useMutation({
    mutationFn: async (commentId: number) => await deleteComment(postId, commentId),
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
