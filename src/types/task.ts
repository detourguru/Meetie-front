import type { CommonResponseType } from "@/types/common";

export interface CreateTaskFormRequestType extends CreateScheduleFormRequestType {
  confirmType: string;
}

export type CreateTaskUpdateHandlerType = <Key extends keyof CreateTaskFormRequestType>(
  key: Key,
  value: CreateTaskFormRequestType[Key],
) => void;

export interface TaskListType extends CreateTaskFormRequestType {
  studyRoomId: string;
  id: string;
}

export interface GetTaskListResponseType extends CommonResponseType {
  data: TaskListType[];
}

export interface GetTaskResponseType extends CommonResponseType {
  data: TaskListType;
}

export interface CreateScheduleFormRequestType {
  title: string;
  content: string;
  endDate: Date | null;
  time: string | null;
}

export type CreateScheduleUpdateHandlerType = <Key extends keyof CreateScheduleFormRequestType>(
  key: Key,
  value: CreateScheduleFormRequestType[Key],
) => void;
