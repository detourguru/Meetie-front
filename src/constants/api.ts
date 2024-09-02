export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const END_POINTS = {
  STUDY_LIST: "/api/study-list",
  STUDY: (studyId: string) => `/api/study/${studyId}`,
  POST_STUDY: `/api/study`,
  STUDY_REQUEST: (studyId: string) => `/api/study/${studyId}/request`,

  USER_INFO_BY_ID: (id: number) => `/api/user-info/${id}`,
  USER_INFO: (id: string) => `/api/user-info?user_id=${id}`,

  ONBOARDING: "/api/onboarding",
};
