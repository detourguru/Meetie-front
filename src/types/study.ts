export interface CreateStudyFormRequestType {
  position: string[];
  topic: string;
  goal: string;
  introduce: string;
  curriculum: string;
  startDate: Date | null;
  endDate: Date | null;
  schedule: string;
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
