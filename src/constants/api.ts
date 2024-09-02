export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const END_POINTS = {
  SIGNUP: "/api/signup",

  STUDY_LIST: "/api/study-list",
  STUDY: (studyId: string) => `/api/study/${studyId}`,
  POST_STUDY: `/api/study`,
  STUDY_REQUEST: (studyId: string) => `/api/study/${studyId}/request`,
  STUDY_REQUEST_ALL: (studyId: string) => `/api/study/${studyId}/request-all`,

  USER_INFO_BY_ID: (id: string) => `/api/user-info/${id}`,
  USER_INFO: (id: string) => `/api/user-info?user_id=${id}`,

  ONBOARDING: "/api/onboarding",

  COMMUNITY_LIST: (tags: string[], sort: string, date: string) =>
    `/api/community-list?tags=${tags.join(",")}&sort=${sort}&date=${date}`,
  COMMUNITY_LIST_RECOMMEND: "/api/community-list/random",
  COMMUNITY: (communityId: number) => `/api/community/${communityId}`,
  POST_COMMUNITY: "/api/community",
};
