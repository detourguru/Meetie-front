import { useMutation } from "@tanstack/react-query";

import { DELETE, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

const deleteUser = async (userId: string) => {
  return await DELETE(END_POINTS.USER_INFO(userId), createInit());
};

export const useDeleteUserMutation = () => {
  const deleteStudyMutation = useMutation({
    mutationFn: async (userId: string) => await deleteUser(userId),
    onError: (error) => {
      console.error(error);
    },
  });

  return deleteStudyMutation;
};
