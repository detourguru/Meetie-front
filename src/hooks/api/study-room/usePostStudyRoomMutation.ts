import { useMutation } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

import type { StudyRoomRequestType } from "@/types/studyRoom";

export const usePostStudyRoomMutation = () => {
  const postStudyRoomMutation = useMutation({
    mutationFn: (studyRoomRequest: StudyRoomRequestType) =>
      POST(END_POINTS.POST_STUDY_ROOM, createInit(studyRoomRequest)),
    onError: (error) => {
      console.error(error);
    },
  });

  return postStudyRoomMutation;
};
