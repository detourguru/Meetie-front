import { useMutation } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";

import type { StudyRoomRequestType } from "@/types/studyRoom";

const postStudyRoom = async (studyRoomRequest: StudyRoomRequestType) => {
  return await POST(END_POINTS.POST_STUDY_ROOM, createInit(studyRoomRequest));
};

export const usePostStudyRoomMutation = () => {
  const postStudyRoomMutation = useMutation({
    mutationFn: postStudyRoom,
    onError: (error) => {
      console.error(error);
    },
  });

  return postStudyRoomMutation;
};