import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommunityFormType } from "@/types/community";

interface PatchCommunityProps {
  createPostForm: CreateCommunityFormType;
  postId: number;
}

const patchCommunity = async ({ createPostForm, postId }: PatchCommunityProps) => {
  return await PATCH(
    END_POINTS.COMMUNITY(postId),
    createInit(createPostForm),
    "커뮤니티 게시글 업데이트 오류",
  );
};

export const usePatchCommunityMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const patchCommunityMutation = useMutation({
    mutationFn: patchCommunity,
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
