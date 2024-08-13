import type { BadgesType } from "@/types/badge";

export const COMMENT: BadgesType = {
  type: "댓글",
  badges: [
    { title: "댓뉴비", level: 1 },
    { title: "댓러너", level: 2 },
    { title: "댓마스터", level: 3 },
  ],
};

export const SHARE: BadgesType = {
  type: "나눔",
  badges: [
    { title: "나눔 뉴비", level: 1 },
    { title: "나눔 러너", level: 2 },
    { title: "나눔 마스터", level: 3 },
  ],
};

export const FEEDBACK: BadgesType = {
  type: "피드백",
  badges: [
    { title: "피드 뉴비", level: 1 },
    { title: "피드 러너", level: 2 },
    { title: "피드 마스터", level: 3 },
  ],
};

export const MEETIE: BadgesType = {
  type: "밋티",
  badges: [
    { title: "밋티 뉴비", level: 1 },
    { title: "밋티 러너", level: 2 },
    { title: "밋티 마스터", level: 3 },
  ],
};

export const BADGESE: BadgesType[] = [COMMENT, SHARE, FEEDBACK, MEETIE];
