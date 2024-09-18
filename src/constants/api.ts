export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const END_POINTS = {
  SIGNUP: "/api/signup",

  AUTH_CALLBACK: "/api/auth/callback",

  STUDY_LIST: "/api/study-list",
  STUDY: (studyId: string) => `/api/study/${studyId}`,
  POST_STUDY: `/api/study`,
  STUDY_REQUEST: (studyId: string) => `/api/study/${studyId}/request`,
  STUDY_REQUEST_ALL: (studyId: string) => `/api/study/${studyId}/request-all`,

  POST_STUDY_ROOM: `/api/study-room`,
  STUDY_ROOM_COMPLETE: (studyId: string) => `/api/study-room/${studyId}/complete`,
  STUDY_ROOM: (studyRoomId: string) => `/api/study-room/${studyRoomId}`,

  BOOKMARK: (id: string) => `/api/bookmarks/${id}`,

  USER_INFO_BY_ID: (id: string) => `/api/user-info/${id}`,
  USER_INFO: (id: string) => `/api/user-info?user_id=${id}`,

  ONBOARDING: "/api/user-info",

  COMMUNITY_LIST: (search: string, tags: string[], sort: string, date: string) =>
    `/api/community-list?search=${search}&tags=${tags.join(",")}&sort=${sort}&date=${date}`,
  COMMUNITY_LIST_RECOMMEND: "/api/community-list/recommend",

  COMMUNITY: (communityId: number) => `/api/community/${communityId}`,
  POST_COMMUNITY: "/api/community",
  COMMUNITY_EMOJI: (communityId: number) => `/api/community/${communityId}/emoji`,
  COMMUNITY_VISIT: (communityId: number) => `/api/community/${communityId}/visit`,

  COMMUNITY_COMMENTS: (communityId: number) => `/api/community/${communityId}/comments`,
  DELETE_COMMUNITY_COMMENTS: (communityId: number, commentId: number) =>
    `/api/community/${communityId}/comments/${commentId}`,
  POST_COMMUNITY_COMMENT_EMOJI: (communityId: number, commentId: number) =>
    `/api/community/${communityId}/comments/${commentId}/emoji`,
  COMMUNITY_COMMENT_EMOJI: (communityId: number, commentId: number, emoji: string) =>
    `/api/community/${communityId}/comments/${commentId}/emoji?emoji=${emoji}`,

  POST_TASK: "/api/task",
  TASK_LIST: (studyRoomId: string) => `/api/task-list/${studyRoomId}`,
  TASK: (taskId: string) => `/api/task/${taskId}`,
  TASK_CONFIRM: `/api/task-confirm`,
  TASK_CONFIRM_ID: (taskId: string) => `/api/task-confirm/${taskId}`,
  TASK_CONFIRM_LIST: (studyRoomId: string, referenceDate: string) =>
    `/api/task-confirm-list/${studyRoomId}?referenceDate=${referenceDate}`,

  POST_SCHEDULE: "/api/schedule",
  SCHEDULE_LIST: (studyRoomId: string) => `/api/schedule-list/${studyRoomId}`,

  ALL_MESSAGE: (studyRoomId: string) => `/api/chat/${studyRoomId}`,
  LAST_MESSAGE: (studyRoomId: string) => `/api/message/${studyRoomId}`,
  UNREAD_MESSAGE: (studyRoomId: string) => `/api/message-unread/${studyRoomId}`,
};
