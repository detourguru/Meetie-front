export const PATH = {
  HOME: "/",

  LOGIN: "/login",

  WALKTHROUGH: "/walkThrough",

  ONBOARDING: (step: string) => `/onBoarding/${step}`,

  MYPAGE: "/mypage",
  ABILITY: "/mypage/ability",
  PASSWORD: "/mypage/password",
  WITHDRAW: "/mypage/withdraw",

  USER_PROFILE: (userId: number) => `/user/${userId}`,
  USER_PROFILE_EDIT: (userId: number) => `/user/${userId}/edit`,

  STUDY_LIST: "/study/list",
  STUDY_EXPLORER: "/study/explorer",
  STUDY_CREATE: "/study/create",
  STUDY: (studyId: number) => `/study/${studyId}`,
  STUDY_REQUEST: (studyId: number) => `/study/${studyId}/request`,

  JOINING_STUDY: "/study/joining",
  LAST_STUDY: "/study/last",
  INTEREST: "/study/interested",
  INTEREST_RECENT_VISIT: "/study/interested/recent",

  FAQ: "/faq",
  INQUIRY: "/inquiry",
  NOTI: "/notification",
} as const;
