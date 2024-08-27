import type { CommonResponseType } from "./common";

export interface UserInformationType {
  id: number;
  user_id: string;
  name: string;
  profile_image: string;
  introduce: string;
  main_badge: string;
  study_tags: string[];
  study_list: string[];
  scrap_list: string[];
  recent_visit: string;
  information_agreement: boolean;
}

export interface ProfileFormType {
  name: string;
  introduce: string;
  profileImage: string;
  badge: string;
  tagList: string[];
}

export type UpdateProfileFormType = <Key extends keyof ProfileFormType>(
  key: Key,
  value: ProfileFormType[Key],
) => void;

export interface GetUserInfoResponseType extends CommonResponseType {
  data: UserInformationType;
}
