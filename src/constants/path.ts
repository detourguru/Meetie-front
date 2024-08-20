export const PATH = {
  HOME: "/",

  LOGIN: "/login",

  WALKTHROUGH: "/walk-through",

  ONBOARDING: (step: string) => `/on-boarding/${step}`,

  MYPAGE: "/mypage",
  ABILITY: "/mypage/ability",
  PASSWORD: "/mypage/password",
  WITHDRAW: "/mypage/withdraw",

  USER_PROFILE: (userId: number) => `/user/${userId}`,
  USER_PROFILE_EDIT: (userId: number) => `/user/${userId}/edit`,

  STUDY_ROOM_LIST: "/study-room/list",
  STUDY_EXPLORER: "/study-explorer",
  STUDY_CREATE: "/study/create",
  STUDY: (studyId: number) => `/study/${studyId}`,
  STUDY_REQUEST: (studyId: number) => `/study/${studyId}/request`,

  TASK_CONFIRM: "/task-confirm",
  TASK_CONFIRM_SUCCESS: "/task-confirm/success",
  TASK_CONFIRM_ID: (taskId: number) => `/task-confirm/${taskId}`,

  JOINING_STUDY: "/study/joining",
  LAST_STUDY: "/study/last",
  INTEREST: "/study/interested",
  INTEREST_RECENT_VISIT: "/study/interested/recent",

  FAQ: "/faq",
  INQUIRY: "/inquiry",
  NOTI: "/notification",
} as const;
