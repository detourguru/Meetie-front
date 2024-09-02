import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUserInfo } from "@/apis/userInfo/updateUserInfo";

import { QUERY_KEYS } from "@/constants/queryKey";

export const useUpdateUserInfoMutation = () => {
  const queryClient = useQueryClient();

  const updateUserInfoMutation = useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return updateUserInfoMutation;
};
