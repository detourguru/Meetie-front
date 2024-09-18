import type { BadgesType } from "@/types/badge";

export const COMMENT: BadgesType = {
  value: "댓글",
  type: "comment",
  badges: [
    { title: "댓뉴비", level: 1, icon: "/svg/ic-badge-comment-newbie.svg" },
    { title: "댓러너", level: 2, icon: "/svg/ic-badge-comment-runner.svg" },
    { title: "댓마스터", level: 3, icon: "/svg/ic-badge-comment-master.svg" },
  ],
};

export const SHARE: BadgesType = {
  value: "나눔",
  type: "nanum",
  badges: [
    { title: "나눔 뉴비", level: 1, icon: "/svg/ic-badge-nanum-newbie.svg" },
    { title: "나눔 러너", level: 2, icon: "/svg/ic-badge-nanum-runner.svg" },
    { title: "나눔 마스터", level: 3, icon: "/svg/ic-badge-nanum-master.svg" },
  ],
};

export const FEEDBACK: BadgesType = {
  value: "피드백",
  type: "feedback",
  badges: [
    { title: "피드 뉴비", level: 1, icon: "/svg/ic-badge-feedback-newbie.svg" },
    { title: "피드 러너", level: 2, icon: "/svg/ic-badge-feedback-runner.svg" },
    { title: "피드 마스터", level: 3, icon: "/svg/ic-badge-feedback-master.svg" },
  ],
};

export const MEETIE: BadgesType = {
  value: "밋티",
  type: "meetie",
  badges: [
    { title: "밋티 뉴비", level: 1, icon: "/svg/ic-badge-meetie-newbie.svg" },
    { title: "밋티 러너", level: 2, icon: "/svg/ic-badge-meetie-runner.svg" },
    { title: "밋티 마스터", level: 3, icon: "/svg/ic-badge-meetie-master.svg" },
  ],
};

export const BADGE_DATA: BadgesType[] = [COMMENT, SHARE, FEEDBACK, MEETIE];
