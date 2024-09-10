export const WEEK_DAY = ["일", "월", "화", "수", "목", "금", "토"];

export const NOON_LIST = ["오전", "오후"];

export const HOUR_LIST = Array.from({ length: 12 }).map((_, index) => {
  if (index < 10) {
    return "0" + index;
  } else {
    return "" + index;
  }
});

export const MINUTE_LIST = Array.from({ length: 60 }).map((_, index) => {
  if (index < 10) {
    return "0" + index;
  } else {
    return "" + index;
  }
});

export const GNB_DATA = [
  {
    text: "스터디룸",
    rootLink: "/study-room",
    link: "/study-room/list",
    icon: "/svg/ic-gnb-study-room.svg",
    disabledIcon: "/svg/ic-gnb-study-room-disabled.svg",
  },
  {
    text: "탐색",
    rootLink: "/study-explorer",
    link: "/study-explorer",
    icon: "/svg/ic-gnb-search.svg",
    disabledIcon: "/svg/ic-gnb-search-disabled.svg",
  },
  {
    text: "커뮤니티",
    rootLink: "/community",
    link: "/community",
    icon: "/svg/ic-gnb-community.svg",
    disabledIcon: "/svg/ic-gnb-community-disabled.svg",
  },
  {
    text: "마이",
    rootLink: "/mypage",
    link: "/mypage",
    icon: "/svg/ic-gnb-my.svg",
    disabledIcon: "/svg/ic-gnb-my-disabled.svg",
  },
];

export const TODAY = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  date: new Date().getDate(),
  day: new Date().getDay(),
};
