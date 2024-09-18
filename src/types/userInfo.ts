import type { CommonResponseType } from "./common";

export interface GetUserInfoResponseType extends CommonResponseType {
  data: UserInformationType;
}

export interface ProfileFormType {
  name: string;
  introduce: string;
  profileImage: string;
  mainBadge: string;
  position: string;
  purposes: string[];
  styles: string[];
  period: string;
}

export type UpdateProfileFormType = <Key extends keyof ProfileFormType>(
  key: Key,
  value: ProfileFormType[Key],
) => void;

export interface UserInformationType {
  id: number;
  user_id: string;
  name: string;
  profileImage: string;
  introduce: string;
  mainBadge: string;
  studyList: string[];
  lastStudyList: string[];
  scrapList: string[];
  recentVisit: string;
  informationAgreement: boolean;
  position: string;
  purposes: string[];
  styles: string[];
  period: string;
}
