import { PATH } from "./path";

export const INFORMATIONS_DATA = {
  STUDY: {
    title: "스터디",
    icon: "/svg/ic-mypage-bookmark.svg",
  },
  SCRAP: {
    title: "스크랩",
    icon: "/svg/ic-mypage-scrap.svg",
  },
  FOLLOW: {
    title: "스터디 친구",
    icon: "/svg/ic-mypage-study-friends.svg",
  },
};

export const MENU_ITEMS_DATA = {
  JOINING: {
    title: "참여 중인 스터디",
    icon: "/svg/ic-joining-study.svg",
    navigateTo: PATH.STUDY_JOINING_LIST,
  },
  PAST: {
    title: "지난 스터디",
    icon: "/svg/ic-last-study.svg",
    navigateTo: PATH.STUDY_LAST_LIST,
  },
  RECENT_VISIT: {
    title: "최근 방문",
    icon: "/svg/ic-study-recent-visit.svg",
  },
  INTEREST: {
    title: "관심 스터디",
    icon: "/svg/ic-study-interested.svg",
    navigateTo: PATH.STUDY_INTEREST_LIST,
  },

  FAQ: {
    title: "FAQ",
    navigateTo: PATH.FAQ,
  },
  INQUIRY: {
    title: "문의하기",
    navigateTo: PATH.INQUIRY,
  },
  NOTIFICATION: {
    title: "공지사항",
    navigateTo: PATH.NOTI,
  },

  PROFIL_EDIT: {
    title: "회원 정보 수정",
  },
  PASSWORD_EDIT: {
    title: "비밀번호 설정",
    navigateTo: PATH.PASSWORD,
  },
  INFORMATION_AGREEMENT: {
    title: "마케팅 개인정보 제 3자 제공동의",
  },
  WITHDRAW: {
    title: "회원 탈퇴",
    navigateTo: PATH.WITHDRAW,
  },
};
