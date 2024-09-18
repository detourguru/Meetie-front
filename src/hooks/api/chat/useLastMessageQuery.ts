import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetMessageResponseType } from "@/types/chat";

const getLastMessage = async (studyRoomId: string) => {
  const data = await GET<GetMessageResponseType>(
    END_POINTS.LAST_MESSAGE(studyRoomId),
    createInit(),
  );

  return data;
};

export const lastMessageQueryOptions = (
  studyRoomId: string,
): UseSuspenseQueryOptions<GetMessageResponseType> => ({
  queryKey: [QUERY_KEYS.LAST_MESSAGE, studyRoomId],
  queryFn: () => getLastMessage(studyRoomId),
});

export function useLastMessageQuery(studyRoomId: string) {
  return useSuspenseQuery(lastMessageQueryOptions(studyRoomId));
}
