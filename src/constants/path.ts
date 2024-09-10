export const PATH = {
  HOME: "/",

  LOGIN: "/login",
  SIGNUP: "/signup",

  AUTH_CALLBACK: "/auth/callback",

  WALKTHROUGH: "/walk-through",

  ONBOARDING: "/onboarding",
  ONBOARDING_COMPLETE: "/onboarding/complete",

  MYPAGE: "/mypage",
  ABILITY: "/mypage/ability",
  PASSWORD: "/mypage/password",

  USER_PROFILE: (userId: string) => `/user/${userId}`,
  USER_PROFILE_EDIT: (userId: string) => `/user/${userId}/edit`,
  // TODO: 페이지 생성 후 PATH 수정
  USER_FOLLOW_LIST: (userId: string) => `/user/${userId}/follow-list`,

  STUDY_ROOM_LIST: "/study-room/list",
  STUDY_EXPLORER: "/study-explorer",
  STUDY_ROOM_COMPLETE: (studyId: string) => `/study-room/${studyId}/complete`,
  STUDY_ROOM: (studyRoomId: string) => `/study-room/${studyRoomId}`,

  STUDY_CREATE: "/study/create",
  STUDY: (studyId: string) => `/study/${studyId}`,
  STUDY_EDIT: (stuydId: string) => `/study/${stuydId}/edit`,
  STUDY_REQUEST: (studyId: string) => `/study/${studyId}/request`,

  TASK_CONFIRM: (taskId: string, studyRoomId: string) =>
    `/task-confirm/${taskId}?studyRoomId=${studyRoomId}`,
  TASK_CONFIRM_SUCCESS: (taskId: string) => `/task-confirm/${taskId}/success`,
  TASK_CONFIRM_DETAIL: (taskConfirmId: string) => `/task-confirm-detail/${taskConfirmId}`,
  TASK_CREATE: (studyRoomId: string) => `/study-room/${studyRoomId}/task-create`,

  // TODO: 페이지 생성 후 PATH 수정
  STUDY_JOINING_LIST: "/study/joining", // 참여중인 스터디 리스트
  STUDY_LAST_LIST: "/study/last", // 종료된 스터디 리스트
  STUDY_INTEREST_LIST: "/study/interested", // 북마크한 관심 스터디 리스트

  FAQ: "/faq",
  INQUIRY: "/inquiry",
  NOTI: "/notification",

  COMMUNITY_LIST: "/community",
  COMMUNITY_CREATE: "/community/create",
  COMMUNITY: (id: number) => `/community/${id}`,
  COMMUNITY_EDIT: (id: number) => `/community/${id}/edit`,
} as const;
