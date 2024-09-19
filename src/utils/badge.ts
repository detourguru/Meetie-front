import { COMMENT, FEEDBACK, MEETIE, SHARE } from "@/constants/badges";

// TODO: 과제 댓글 (피드백) 조건 추가
export const getCommentBadge = (communityCommentCount: number) => {
  const commentCondition = COMMENT.badges.map(
    (comment) => comment.conditions.communityCommentCount,
  );

  if (communityCommentCount < commentCondition[0]) {
    return 0;
  } else if (communityCommentCount < commentCondition[1]) {
    return 1;
  } else if (communityCommentCount < commentCondition[2]) {
    return 2;
  } else {
    return 3;
  }
};

// TODO: 친구 수 조건 추가
export const getNanumBadge = (communityCount: number, communityEngagementCount: number) => {
  const communityCondition = SHARE.badges.map((nanum) => nanum.conditions.communityCount);
  const communityEngagementCondition = SHARE.badges.map(
    (nanum) => nanum.conditions.communityEngagementCount,
  );

  if (
    communityCount < communityCondition[0] ||
    communityEngagementCount < communityEngagementCondition[0]
  ) {
    return 0;
  } else if (
    communityCount < communityCondition[0] ||
    communityEngagementCount < communityEngagementCondition[1]
  ) {
    return 1;
  } else if (
    communityCount < communityCondition[0] ||
    communityEngagementCount < communityEngagementCondition[2]
  ) {
    return 2;
  } else {
    return 3;
  }
};

// TODO: 과제 댓글 (피드백) 조건 추가, 과제 횟수를 xp로 변경
export const getMeetieBadge = (taskCount: number, ownerCount: number) => {
  const taskCondition = MEETIE.badges.map((meetie) => meetie.conditions.taskCount);
  const ownerCondition = MEETIE.badges.map((meetie) => meetie.conditions.ownerCount);

  if (taskCount < taskCondition[0] || ownerCount < ownerCondition[0]) {
    return 0;
  } else if (taskCount < taskCondition[1] || ownerCount < ownerCondition[1]) {
    return 1;
  } else if (taskCount < taskCondition[2] || ownerCount < ownerCondition[2]) {
    return 2;
  } else {
    return 3;
  }
};

// TODO: 과제 댓글 (피드백), 매너 평가 조건 추가
export const getFeedbackBadge = (communityEngagementCount: number) => {
  const communityEngagementCondition = FEEDBACK.badges.map(
    (feedback) => feedback.conditions.communityEngagementCount,
  );

  if (communityEngagementCount < communityEngagementCondition[0]) {
    return 0;
  } else if (communityEngagementCount < communityEngagementCondition[1]) {
    return 1;
  } else if (communityEngagementCount < communityEngagementCondition[2]) {
    return 2;
  } else {
    return 3;
  }
};
