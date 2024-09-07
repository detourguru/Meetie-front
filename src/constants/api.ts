export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const END_POINTS = {
  SIGNUP: "/api/signup",

  STUDY_LIST: "/api/study-list",
  STUDY: (studyId: string) => `/api/study/${studyId}`,
  POST_STUDY: `/api/study`,
  STUDY_REQUEST: (studyId: string) => `/api/study/${studyId}/request`,
  STUDY_REQUEST_ALL: (studyId: string) => `/api/study/${studyId}/request-all`,

  POST_STUDY_ROOM: `/api/study-room`,
  STUDY_ROOM_COMPLETE: (studyId: string) => `/api/study-room/${studyId}/complete`,
  STUDY_ROOM: (studyRoomId: string) => `/api/study-room/${studyRoomId}`,

  BOOKMARK: (id: string) => `/api/bookmarks/${id}`,

  USER_INFO_BY_ID: (id: number) => `/api/user-info/${id}`,
  USER_INFO: (id: string) => `/api/user-info?user_id=${id}`,

  ONBOARDING: "/api/onboarding",

  COMMUNITY_LIST: (search: string, tags: string[], sort: string, date: string) =>
    `/api/community-list?search=${search}&tags=${tags.join(",")}&sort=${sort}&date=${date}`,
  COMMUNITY_LIST_RECOMMEND: "/api/community-list/recommend",
  COMMUNITY: (communityId: number) => `/api/community/${communityId}`,
  POST_COMMUNITY: "/api/community",
  COMMUNITY_COMMENTS: (communityId: number) => `/api/community/${communityId}/comments`,
  DELETE_COMMUNITY_COMMENTS: (communityId: number, commentId: number) =>
    `/api/community/${communityId}/comments/${commentId}`,
  COMMUNITY_VISIT: (communityId: number) => `/api/community/${communityId}/visit`,
};
