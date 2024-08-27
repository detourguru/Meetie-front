import { useMutation } from "@tanstack/react-query";

import { updateUserInfo } from "@/apis/userInfo/updateUserInfo";

import { queryClient } from "@/components/providers/QueryProvider";

import { QUERY_KEYS } from "@/constants/queryKey";

export const useUpdateUserInfoMutation = () => {
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
