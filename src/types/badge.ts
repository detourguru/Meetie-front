export interface BadgesType {
  value: string;
  type: string;
  title: string;
  description: string;
  conditions: string[];
  badges: BadgeType[];
}

export interface BadgeType {
  title: string;
  level: number;
  icon: string;
  conditions: { [key: string]: number };
}

export interface BadgeLevelType {
  [key: string]: number;
}

export interface BadgeConditionType {
  ownerCount: number;
  taskCount: number;
  communityCount: number;
  communityCommentsCount: number;
  communityEmojiCount: number;
}

export interface GetBadgeConditionType {
  data: BadgeConditionType;
}
