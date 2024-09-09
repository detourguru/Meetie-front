import type { CommonResponseType } from "@/types/common";

export interface CreateTaskFormRequestType {
  title: string;
  confirmType: string;
  content: string;
  endDate: Date | null;
  time: string | null;
}

export type CreateTaskUpdateHandlerType = <Key extends keyof CreateTaskFormRequestType>(
  key: Key,
  value: CreateTaskFormRequestType[Key],
) => void;

export interface TaskListType extends CreateTaskFormRequestType {
  studyRoomId: string;
}

export interface GetTaskListResponseType extends CommonResponseType {
  data: TaskListType[];
}
