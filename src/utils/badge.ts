// TODO: 과제 댓글 (피드백) 조건 추가
export const getCommentBadge = (communityCommentCount: number) => {
  if (communityCommentCount < 20) {
    return 1;
  } else if (communityCommentCount < 50) {
    return 2;
  } else {
    return 3;
  }
};

// TODO: 친구 수 조건 추가
export const getNanumBadge = (communityCount: number, communityEngagementCount: number) => {
  if (communityCount < 20 || communityEngagementCount < 50) {
    return 1;
  } else if (communityCount < 50 || communityEngagementCount < 100) {
    return 2;
  } else {
    return 3;
  }
};

// TODO: 과제 댓글 (피드백) 조건 추가, 과제 횟수를 xp로 변경
export const getMeetieBadge = (taskCount: number, ownerCount: number) => {
  if (taskCount < 20 || ownerCount < 20) {
    return 1;
  } else if (taskCount < 50 || ownerCount < 50) {
    return 2;
  } else {
    return 3;
  }
};

// TODO: 과제 댓글 (피드백), 매너 평가 조건 추가
export const getFeedbackBadge = (communityEngagementCount: number) => {
  if (communityEngagementCount < 20) {
    return 1;
  } else if (communityEngagementCount < 50) {
    return 2;
  } else {
    return 3;
  }
};
