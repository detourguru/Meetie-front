export interface CreateStudyFormRequestType {
  position: string[];
  topic: string;
  goal: string;
  introduce: string;
  curriculum: string;
  startDate: string;
  endDate: string;
  schedule: string;
  personCount: number;
  tagList: string[];
}

export interface CreateStudyStepProps {
  createStudyForm: CreateStudyFormRequestType;
  updateInputValue: <Key extends keyof CreateStudyFormRequestType>(
    key: Key,
    value: CreateStudyFormRequestType[Key],
  ) => void;
}
