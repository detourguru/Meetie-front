import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { GetStudyListResponseType } from "@/types/study";

export const getStudyList = async () => {
  const { data } = await axiosInstance.get<GetStudyListResponseType>(END_POINTS.STUDY_LIST);

  return data;
};
