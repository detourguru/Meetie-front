import type { CommonResponseType } from "@/types/common";

export interface CreateStudyFormRequestType {
  position: string[];
  title: string;
  goal: string;
  introduce: string;
  curriculum: string;
  startDate: Date | null;
  endDate: Date | null;
  week: string;
  time: string | null;
  recruitMemberCount: number;
  tagList: string[];
}

export interface CreateStudyStepProps {
  createStudyForm: CreateStudyFormRequestType;
  updateInputValue: CreateStudyUpdateHandlerType;
}

export type CreateStudyUpdateHandlerType = <Key extends keyof CreateStudyFormRequestType>(
  key: Key,
  value: CreateStudyFormRequestType[Key],
) => void;

export interface GetStudyListResponseType extends CommonResponseType {
  data: StudyListType[];
}

export interface StudyListType extends CreateStudyFormRequestType {
  id: string;
  isRecruit: boolean;
  createdAt: Date;
  joinMemberList: string[];
  requestMemberList: string[];
  user_id: string;
}

export interface GetStudyResponseType extends CommonResponseType {
  data: StudyListType;
}
