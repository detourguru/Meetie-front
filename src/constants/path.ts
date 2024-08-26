export const PATH = {
  HOME: "/",

  LOGIN: "/login",

  WALKTHROUGH: "/walk-through",

  ONBOARDING: "/onboarding",
  ONBOARDING_COMPLETE: "/onboarding/complete",

  MYPAGE: "/mypage",
  ABILITY: "/mypage/ability",
  PASSWORD: "/mypage/password",
  WITHDRAW: "/mypage/withdraw",

  USER_PROFILE: (userId: number) => `/user/${userId}`,
  USER_PROFILE_EDIT: (userId: number) => `/user/${userId}/edit`,
  // TODO: 페이지 생성 후 PATH 수정
  USER_FOLLOW_LIST: (userId: number) => `/user/${userId}/follow-list`,

  STUDY_ROOM_LIST: "/study-room/list",
  STUDY_EXPLORER: "/study-explorer",
  STUDY_CREATE: "/study/create",
  STUDY: (studyId: string) => `/study/${studyId}`,
  STUDY_REQUEST: (studyId: number) => `/study/${studyId}/request`,

  TASK_CONFIRM: "/task-confirm",
  TASK_CONFIRM_SUCCESS: "/task-confirm/success",
  TASK_CONFIRM_ID: (taskId: number) => `/task-confirm/${taskId}`,

  // TODO: 페이지 생성 후 PATH 수정
  STUDY_JOINING_LIST: "/study/joining", // 참여중인 스터디 리스트
  STUDY_LAST_LIST: "/study/last", // 종료된 스터디 리스트
  STUDY_INTEREST_LIST: "/study/interested", // 북마크한 관심 스터디 리스트

  FAQ: "/faq",
  INQUIRY: "/inquiry",
  NOTI: "/notification",
} as const;
