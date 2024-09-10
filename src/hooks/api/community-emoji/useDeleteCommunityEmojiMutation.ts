import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useDeleteCommunityEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const deleteCommunityEmojiMutation = useMutation({
    mutationFn: () => DELETE(END_POINTS.COMMUNITY_EMOJI(postId), createInit()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommunityEmojiMutation;
};
