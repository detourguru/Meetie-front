import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetMessageListResponseType } from "@/types/chat";

const getAllMessage = async (studyRoomId: string) => {
  const data = await GET<GetMessageListResponseType>(
    END_POINTS.ALL_MESSAGE(studyRoomId),
    createInit(),
  );

  return data;
};

export const allMessageQueryOptions = (
  studyRoomId: string,
): UseSuspenseQueryOptions<GetMessageListResponseType> => ({
  queryKey: [QUERY_KEYS.MESSAGES, studyRoomId],
  queryFn: () => getAllMessage(studyRoomId),
});

export function useAllMessageQuery(studyRoomId: string) {
  return useSuspenseQuery(allMessageQueryOptions(studyRoomId));
}
