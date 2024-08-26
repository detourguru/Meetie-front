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
  personCount: number;
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
  studyId: string;
  isRecruit: boolean;
  createdAt: Date;
}

export interface GetStudyResponseType extends CommonResponseType {
  data: StudyListType;
}
