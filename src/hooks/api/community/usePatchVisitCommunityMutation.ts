import { useMutation } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

const patchVisitComunity = async (postId: number) => {
  return await PATCH(END_POINTS.COMMUNITY_VISIT(postId), createInit());
};

export const usePatchVisitCommunityMutation = () => {
  const patchVisitCommunityMutation = useMutation({
    mutationFn: patchVisitComunity,
    onError: (error) => {
      console.error(error);
    },
  });

  return patchVisitCommunityMutation;
};
