import { useMutation, useQueryClient } from "@tanstack/react-query";

import { patchBookmarks } from "@/apis/bookmarks/patchBookmarks";

import { QUERY_KEYS } from "@/constants/queryKey";

export const usePatchBookmarkMutation = () => {
  const queryClient = useQueryClient();

  const patchBookmarkMutation = useMutation({
    mutationFn: patchBookmarks,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.STUDY_LIST],
      });
    },
    onError: (error) => {
      // TODO: 에러시 업데이트 실패 토스트 메시지 추가
      console.log(error);
    },
  });

  return patchBookmarkMutation;
};
