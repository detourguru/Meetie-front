import { useMutation } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

export const usePatchVisitCommunityMutation = () => {
  const patchVisitCommunityMutation = useMutation({
    mutationFn: (postId: number) => PATCH(END_POINTS.COMMUNITY_VISIT(postId), createInit()),
    onError: (error) => {
      console.error(error);
    },
  });

  return patchVisitCommunityMutation;
};
