import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useDeleteCommunityMutation = () => {
  const queryClient = useQueryClient();

  const deleteCommunityMutation = useMutation({
    mutationFn: (postId: number) => DELETE(END_POINTS.COMMUNITY(postId), createInit()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY_LIST_RECOMMEND] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteCommunityMutation;
};
