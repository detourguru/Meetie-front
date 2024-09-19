import { useBadgeConditionQuery } from "@/hooks/api/userInfo/useBadgeConditionQuery";

import { getCommentBadge, getFeedbackBadge, getMeetieBadge, getNanumBadge } from "@/utils/badge";

export const useBadge = () => {
  const { data } = useBadgeConditionQuery();

  const { communityCommentsCount, communityCount, communityEmojiCount, ownerCount, taskCount } =
    data.data;

  const communityEngagementCount = communityCommentsCount + communityEmojiCount;

  const commentBadgeLevel = getCommentBadge(communityCommentsCount);
  const nanumBadgeLevel = getNanumBadge(communityCount, communityEngagementCount);
  const feedbackBadgeLevel = getFeedbackBadge(communityEngagementCount);
  const meetieBadgeLevel = getMeetieBadge(taskCount, ownerCount);

  const getBadgeLevel = (type: string) => {
    switch (type) {
      case "comment":
        return commentBadgeLevel;
      case "nanum":
        return nanumBadgeLevel;
      case "feedback":
        return feedbackBadgeLevel;
      case "meetie":
        return meetieBadgeLevel;
      default:
        return 0;
    }
  };

  const getBadgeCondition = (type: string) => {
    switch (type) {
      case "communityCommentCount":
        return communityCommentsCount;
      case "communityCount":
        return communityCount;
      case "ownerCount":
        return ownerCount;
      case "taskCount":
        return taskCount;
      case "communityEngagementCount":
        return communityEngagementCount;
      default:
        return 0;
    }
  };

  return {
    communityCommentsCount,
    communityCount,
    communityEmojiCount,
    ownerCount,
    taskCount,
    getBadgeLevel,
    getBadgeCondition,
  };
};
