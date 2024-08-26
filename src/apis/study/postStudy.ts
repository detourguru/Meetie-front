import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { CreateStudyFormRequestType } from "@/types/study";

export const postStudy = async (createStudyForm: CreateStudyFormRequestType) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  return axiosInstance.post(END_POINTS.STUDY, JSON.stringify(createStudyForm), config);
};
