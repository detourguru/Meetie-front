import type { BadgesType } from "@/types/badge";
import CommentNewbie from "/public/svg/ic-badge-comment-newbie.svg";
import CommentRunner from "/public/svg/ic-badge-comment-runner.svg";
import CommentMaset from "/public/svg/ic-badge-comment-master.svg";
import NanumNewbie from "/public/svg/ic-badge-nanum-newbie.svg";
import NanumRunner from "/public/svg/ic-badge-nanum-runner.svg";
import NanumMaset from "/public/svg/ic-badge-nanum-master.svg";
import FeedbackNewbie from "/public/svg/ic-badge-feedback-newbie.svg";
import FeedbackRunner from "/public/svg/ic-badge-feedback-runner.svg";
import FeedbackMaset from "/public/svg/ic-badge-feedback-master.svg";
import MeetieNewbie from "/public/svg/ic-badge-meetie-newbie.svg";
import MeetieRunner from "/public/svg/ic-badge-meetie-runner.svg";
import MeetieMaset from "/public/svg/ic-badge-meetie-master.svg";

export const COMMENT: BadgesType = {
  type: "댓글",
  badges: [
    { title: "댓뉴비", level: 1, icon: CommentNewbie },
    { title: "댓러너", level: 2, icon: CommentRunner },
    { title: "댓마스터", level: 3, icon: CommentMaset },
  ],
};

export const SHARE: BadgesType = {
  type: "나눔",
  badges: [
    { title: "나눔 뉴비", level: 1, icon: NanumNewbie },
    { title: "나눔 러너", level: 2, icon: NanumRunner },
    { title: "나눔 마스터", level: 3, icon: NanumMaset },
  ],
};

export const FEEDBACK: BadgesType = {
  type: "피드백",
  badges: [
    { title: "피드 뉴비", level: 1, icon: FeedbackNewbie },
    { title: "피드 러너", level: 2, icon: FeedbackRunner },
    { title: "피드 마스터", level: 3, icon: FeedbackMaset },
  ],
};

export const MEETIE: BadgesType = {
  type: "밋티",
  badges: [
    { title: "밋티 뉴비", level: 1, icon: MeetieNewbie },
    { title: "밋티 러너", level: 2, icon: MeetieRunner },
    { title: "밋티 마스터", level: 3, icon: MeetieMaset },
  ],
};

export const BADGE_DATA: BadgesType[] = [COMMENT, SHARE, FEEDBACK, MEETIE];
