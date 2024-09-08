import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommunityFormType } from "@/types/community";

interface PatchCommunityProps {
  createPostForm: CreateCommunityFormType;
  postId: number;
}

export const usePatchCommunityMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const patchCommunityMutation = useMutation({
    mutationFn: ({ createPostForm, postId }: PatchCommunityProps) =>
      PATCH(END_POINTS.COMMUNITY(postId), createInit(createPostForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY, postId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchCommunityMutation;
};
