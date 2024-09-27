import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const deleteCommunityEmoji = async (postId: number) => {
  return await DELETE(
    END_POINTS.COMMUNITY_EMOJI(postId),
    createInit(),
    "커뮤니티 이모지 삭제 오류",
  );
};

export const useDeleteCommunityEmojiMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const deleteCommunityEmojiMutation = useMutation({
    mutationFn: async () => await deleteCommunityEmoji(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommunityEmojiMutation;
};
