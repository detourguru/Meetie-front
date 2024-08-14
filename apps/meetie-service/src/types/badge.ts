export interface BadgesType {
  type: string;
  badges: BadgeType[];
}

export interface BadgeType {
  title: string;
  level: number;
  icon: string;
}
