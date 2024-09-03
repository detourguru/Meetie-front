import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { BookmarksType } from "@/types/bookmarks";

interface PatchBookmarksParamsType {
  bookmarkForm: BookmarksType;
  id: string;
}

export const patchBookmarks = async ({ bookmarkForm, id }: PatchBookmarksParamsType) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axiosInstance.patch(END_POINTS.BOOKMARK(id), bookmarkForm, config);
};
