import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getStudyList = async () => {
  const { data } = await axiosInstance.get(END_POINTS.STUDY);

  return data;
};
