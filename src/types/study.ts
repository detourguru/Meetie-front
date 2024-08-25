export interface CreateStudyFormRequestType {
  position: string[];
  topic: string;
  goal: string;
  introduce: string;
  curriculum: string;
  startDate: Date | null;
  endDate: Date | null;
  week: string;
  // time: { noon: string; hour: string; minute: string } | null;
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
