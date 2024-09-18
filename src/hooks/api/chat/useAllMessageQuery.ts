import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetStudyRoomResponseType } from "@/types/studyRoom";

const getAllMessage = async (chatUserId: string) => {
  const data = await GET<GetStudyRoomResponseType>(
    END_POINTS.ALL_MESSAGE(chatUserId),
    createInit(),
  );

  return data;
};

export const allMessageQueryOptions = (
  chatUserId: string,
): UseSuspenseQueryOptions<GetStudyRoomResponseType> => ({
  queryKey: [QUERY_KEYS.MESSAGES, chatUserId],
  queryFn: () => getAllMessage(chatUserId),
});

export function useAllMessageQuery(chatUserId: string) {
  return useSuspenseQuery(allMessageQueryOptions(chatUserId));
}
