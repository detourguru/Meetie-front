import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetTaskConfirmListResponseType } from "@/types/taskConfirm";

interface TaskConfirmListQueryOptionsProps {
  studyRoomId: string;
  referenceDate: string;
}

const getTaskConfirmList = async (studyRoomId: string, referenceDate: string) => {
  const data = await GET<GetTaskConfirmListResponseType>(
    END_POINTS.TASK_CONFIRM_LIST(studyRoomId, referenceDate),
    createInit(),
  );

  return data;
};

export const taskConfirmListQueryOptions = ({
  studyRoomId,
  referenceDate,
}: TaskConfirmListQueryOptionsProps): UseSuspenseQueryOptions<GetTaskConfirmListResponseType> => ({
  queryKey: [QUERY_KEYS.TASK_CONFIRM_LIST, referenceDate],
  queryFn: () => getTaskConfirmList(studyRoomId, referenceDate),
});

export function useTaskConfirmListQuery(studyRoomId: string, referenceDate: string) {
  return useSuspenseQuery(taskConfirmListQueryOptions({ studyRoomId, referenceDate }));
}
