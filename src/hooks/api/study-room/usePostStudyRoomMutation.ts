import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { StudyRoomRequestType } from "@/types/studyRoom";

const postStudyRoom = async (studyRoomRequest: StudyRoomRequestType) => {
  return await POST(END_POINTS.POST_STUDY_ROOM, createInit(studyRoomRequest));
};

export const usePostStudyRoomMutation = () => {
  const queryClient = useQueryClient();

  const postStudyRoomMutation = useMutation({
    mutationFn: postStudyRoom,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return postStudyRoomMutation;
};
