export const PATH = {
  HOME: "/",

  LOGIN: "/login",

  WALKTHROUGH: "/walkThrough",

  ONBOARDING: (step: string) => `/onBoarding/${step}`,

  MYPAGE: "/mypage",
  ABILITY: "/mypage/ability",
  PROFILE: "/mypage/profile",
  PASSWORD: "/mypage/password",
  WITHDRAW: "/mypage/withdraw",

  STUDY_LIST: "/study/list",
  JOINING_STUDY: "/study/joining",
  LAST_STUDY: "/study/last",
  INTEREST: "/study/interested",
  INTEREST_RECENT_VISIT: "/study/interested/recent",

  FAQ: "/faq",
  INQUIRY: "/inquiry",
  NOTI: "/notification",
} as const;
