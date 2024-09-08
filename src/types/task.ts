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
