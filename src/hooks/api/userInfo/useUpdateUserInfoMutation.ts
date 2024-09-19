import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { UserInformationType } from "@/types/userInfo";

interface UpdateUserInfoParamsType {
  id: string;
  updateUserForm: Partial<UserInformationType>;
}

const updateUserInfo = async ({ id, updateUserForm }: UpdateUserInfoParamsType) => {
  return await PATCH(END_POINTS.USER_INFO_BY_ID(id), createInit(updateUserForm));
};

export const useUpdateUserInfoMutation = () => {
  const queryClient = useQueryClient();

  const updateUserInfoMutation = useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return updateUserInfoMutation;
};
