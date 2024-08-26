import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

import type { GetStudyResponseType } from "@/types/study";

export const getStudy = async (studyId: string) => {
  const { data } = await axiosInstance.get<GetStudyResponseType>(END_POINTS.STUDY(studyId));

  return data;
};
