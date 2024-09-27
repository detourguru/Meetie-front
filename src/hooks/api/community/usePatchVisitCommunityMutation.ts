import { useMutation } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

const patchVisitComunity = async (postId: number) => {
  return await PATCH(
    END_POINTS.COMMUNITY_VISIT(postId),
    createInit(),
    "커뮤니티 게시글 조회수 증가 오류",
  );
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
