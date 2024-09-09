import { useMutation } from "@tanstack/react-query";

import { patchBookmarks } from "@/apis/bookmarks/patchBookmarks";

export const usePatchBookmarkMutation = () => {
  const patchBookmarkMutation = useMutation({
    mutationFn: patchBookmarks,
    onError: (error) => {
      // TODO: 에러시 업데이트 실패 토스트 메시지 추가
      console.log(error);
    },
  });

  return patchBookmarkMutation;
};
