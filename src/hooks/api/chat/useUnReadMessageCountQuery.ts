import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetUnReadMessageCountResponseType } from "@/types/chat";

const getUnReadMessageCount = async (studyRoomId: string) => {
  const data = await GET<GetUnReadMessageCountResponseType>(
    END_POINTS.UNREAD_MESSAGE(studyRoomId),
    createInit(),
  );

  return data;
};

export const unReadMessageCountQueryOptions = (
  studyRoomId: string,
): UseSuspenseQueryOptions<GetUnReadMessageCountResponseType> => ({
  queryKey: [QUERY_KEYS.UNREAD_MESSAGE_COUNT, studyRoomId],
  queryFn: () => getUnReadMessageCount(studyRoomId),
});

export function useUnReadMessageCountQuery(studyRoomId: string) {
  return useSuspenseQuery(unReadMessageCountQueryOptions(studyRoomId));
}
