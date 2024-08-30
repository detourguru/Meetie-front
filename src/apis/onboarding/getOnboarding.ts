import { axiosInstance } from "@/apis/axiosInstance";

import { END_POINTS } from "@/constants/api";

export const getOnboarding = async () => {
  const { data } = await axiosInstance.get(END_POINTS.ONBOARDING);

  return data;
};
