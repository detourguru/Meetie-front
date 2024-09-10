import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateCommunityFormType } from "@/types/community";

const postCommunity = async (createCommunityForm: CreateCommunityFormType) => {
  return await POST(END_POINTS.POST_COMMUNITY, createInit(createCommunityForm));
};
export const usePostCommunityMutation = () => {
  const queryClient = useQueryClient();

  const postCommunityMutation = useMutation({
    mutationFn: postCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY_LIST] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return postCommunityMutation;
};
