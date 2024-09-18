import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

interface SendMessageProps {
  message: string;
  studyRoomId: string;
}

const sendMessage = async ({ message, studyRoomId }: SendMessageProps) => {
  return await POST(END_POINTS.ALL_MESSAGE(studyRoomId), createInit({ message }));
};

export const useSendMessageMutation = (studyRoomId: string) => {
  const queryClient = useQueryClient();

  const sendMessageMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MESSAGES, studyRoomId] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.LAST_MESSAGE, studyRoomId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return sendMessageMutation;
};
