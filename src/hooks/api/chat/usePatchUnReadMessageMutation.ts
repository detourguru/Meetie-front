import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

const patchUnReadMessage = async (studyRoomId: string) => {
  return await PATCH(END_POINTS.UNREAD_MESSAGE(studyRoomId), createInit());
};

export const usePatchUnReadMessage = (studyRoomId: string) => {
  const queryClient = useQueryClient();

  const patchUnReadMessageMutation = useMutation({
    mutationFn: patchUnReadMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.UNREAD_MESSAGE_COUNT, studyRoomId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return patchUnReadMessageMutation;
};
