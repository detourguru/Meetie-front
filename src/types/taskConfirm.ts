import type { CommonResponseType } from "@/types/common";

export interface TaskConfirmRequestType {
  contents: string;
  mediaList: string[];
}

export type TaskConfirmUpdateHandlerType = <Key extends keyof TaskConfirmRequestType>(
  key: Key,
  value: TaskConfirmRequestType[Key],
) => void;

export interface TaskConfirmPostProps {
  taskConfirmForm: TaskConfirmRequestType;
  updateInputValue: TaskConfirmUpdateHandlerType;
}

export interface TaskConfirmType extends TaskConfirmRequestType {
  id: string;
  created_at: Date;
  user_id: string;
  // task_id: string;
  // study_id: string;
}

export interface GetTaskConfirmResponseType extends CommonResponseType {
  data: TaskConfirmType;
}
