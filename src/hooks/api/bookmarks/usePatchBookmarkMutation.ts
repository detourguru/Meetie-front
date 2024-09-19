import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PATCH, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { BookmarksType } from "@/types/bookmarks";

interface PatchBookmarksParamsType {
  bookmarkForm: BookmarksType;
  id: string;
}

const patchBookmark = async ({ bookmarkForm, id }: PatchBookmarksParamsType) => {
  return await PATCH(END_POINTS.BOOKMARK(id), createInit(bookmarkForm));
};

export const usePatchBookmarkMutation = () => {
  const queryClient = useQueryClient();

  const patchBookmarkMutation = useMutation({
    mutationFn: patchBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.STUDY_LIST],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_INFO, QUERY_KEYS.OWNER_USER],
      });
    },
    onError: (error) => {
      // TODO: 에러시 업데이트 실패 토스트 메시지 추가
      console.log(error);
    },
  });

  return patchBookmarkMutation;
};
