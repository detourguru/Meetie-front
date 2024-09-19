import type { BadgesType } from "@/types/badge";

export const CONDITIONS: { [key: string]: (count: number) => string } = {
  communityCommentCount: (count) => `댓글 ${count}회 작성`,
  communityCount: (count) => `게시글 ${count}회 작성`,
  communityEngagementCount: (count) => `피드백 ${count}회 하기`,
  ownerCount: (count) => `방장 ${count}회 달성`,
  taskCount: (count) => `과제 ${count}회 제출`,
};

export const COMMENT: BadgesType = {
  value: "댓글",
  type: "comment",
  title: "대화를 이어가는 힘!",
  description: `꾸준한 댓글로 활기를 불어넣었어요.\n나의 말 한마디가 사람들을 모으고 대화를 이끌어냅니다.`,
  conditions: ["communityCommentCount"],
  badges: [
    {
      title: "댓뉴비",
      level: 1,
      icon: "/svg/ic-badge-comment-newbie.svg",
      conditions: { communityCommentCount: 5 },
    },
    {
      title: "댓러너",
      level: 2,
      icon: "/svg/ic-badge-comment-runner.svg",
      conditions: { communityCommentCount: 20 },
    },
    {
      title: "댓마스터",
      level: 3,
      icon: "/svg/ic-badge-comment-master.svg",
      conditions: { communityCommentCount: 50 },
    },
  ],
};

export const SHARE: BadgesType = {
  value: "나눔",
  type: "nanum",
  title: "논쟁을 이끄는 힘!",
  description: `커뮤니티에서 활발한 논의를 이끌었어요.\n나의 아이디어가 새로운 대화의 시작입니다.`,
  conditions: ["communityCount", "communityEngagementCount"],
  badges: [
    {
      title: "나눔 뉴비",
      level: 1,
      icon: "/svg/ic-badge-nanum-newbie.svg",
      conditions: { communityCount: 5, communityEngagementCount: 10 },
    },
    {
      title: "나눔 러너",
      level: 2,
      icon: "/svg/ic-badge-nanum-runner.svg",
      conditions: { communityCount: 20, communityEngagementCount: 50 },
    },
    {
      title: "나눔 마스터",
      level: 3,
      icon: "/svg/ic-badge-nanum-master.svg",
      conditions: { communityCount: 50, communityEngagementCount: 100 },
    },
  ],
};

export const FEEDBACK: BadgesType = {
  value: "피드백",
  type: "feedback",
  title: "변화를 만드는 피드백!",
  description: `피드백이 커뮤니티를 더 나은 방향으로 이끌었습니다.\n나의 IT 스터디 피드백 능력이 상승했어요`,
  conditions: ["communityEngagementCount"],
  badges: [
    {
      title: "피드 뉴비",
      level: 1,
      icon: "/svg/ic-badge-feedback-newbie.svg",
      conditions: { communityEngagementCount: 10 },
    },
    {
      title: "피드 러너",
      level: 2,
      icon: "/svg/ic-badge-feedback-runner.svg",
      conditions: { communityEngagementCount: 20 },
    },
    {
      title: "피드 마스터",
      level: 3,
      icon: "/svg/ic-badge-feedback-master.svg",
      conditions: { communityEngagementCount: 50 },
    },
  ],
};

export const MEETIE: BadgesType = {
  value: "밋티",
  type: "meetie",
  title: "모두가 믿고 따르는 리더쉽!",
  description: `진정한 방장으로 거듭났습니다.\n나의 IT 스터디 방장 능력이 상승했어요`,
  conditions: ["ownerCount", "taskCount"],
  badges: [
    {
      title: "밋티 뉴비",
      level: 1,
      icon: "/svg/ic-badge-meetie-newbie.svg",
      conditions: { taskCount: 1, ownerCount: 5 },
    },
    {
      title: "밋티 러너",
      level: 2,
      icon: "/svg/ic-badge-meetie-runner.svg",
      conditions: { taskCount: 3, ownerCount: 20 },
    },
    {
      title: "밋티 마스터",
      level: 3,
      icon: "/svg/ic-badge-meetie-master.svg",
      conditions: { taskCount: 5, ownerCount: 50 },
    },
  ],
};

export const BADGE_DATA: BadgesType[] = [COMMENT, SHARE, FEEDBACK, MEETIE];
