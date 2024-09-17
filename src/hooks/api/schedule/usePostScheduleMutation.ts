import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateScheduleFormRequestType } from "@/types/task";

const postSchedule = async (createScheduleForm: CreateScheduleFormRequestType) => {
  return await POST(END_POINTS.POST_SCHEDULE, createInit(createScheduleForm));
};

export const usePostScheduleMutation = (studyRoomId: string) => {
  const queryClient = useQueryClient();

  const postScheduleMutation = useMutation({
    mutationFn: postSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.SCHEDULE_LIST, studyRoomId] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return postScheduleMutation;
};
