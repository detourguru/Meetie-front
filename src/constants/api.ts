export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const END_POINTS = {
  STUDY_LIST: "/api/study-list",
  STUDY: (studyId: string) => `/api/study/${studyId}`,
  POST_STUDY: `/api/study`,

  USER_INFO: "/api/user-info",
};
