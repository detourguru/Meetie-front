import { useMutation } from "@tanstack/react-query";

import { patchBookmarks } from "@/apis/bookmarks/patchBookmarks";

export const usePatchBookmarkMutation = () => {
  const patchBookmarkMutation = useMutation({
    mutationFn: patchBookmarks,
    onError: (error) => {
      console.log(error);
    },
  });

  return patchBookmarkMutation;
};
