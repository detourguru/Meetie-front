import type { BadgeLevelType } from "@/types/badge";
import type { CommonResponseType } from "@/types/common";
import type { StudyListType } from "@/types/study";

export interface GetUserInfoResponseType extends CommonResponseType {
  data: UserInformationType;
}

export interface GetAllUserInfoResponseType extends CommonResponseType {
  data: UserInformationType[];
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
  scrapList: StudyListType[];
  recentVisit: string;
  badges: BadgeLevelType;
  informationAgreement: boolean;
  position: string;
  purposes: string[];
  styles: string[];
  period: string;
}
