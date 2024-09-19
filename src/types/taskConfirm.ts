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
  emojiList: TaskPostEmojiType[];
}

export interface TaskCommentType {
  id: string;
  user_id: string;
  name: string;
  profileImage: string;
  created_at: Date;
  contents: string;
  emojiList: CommentEmojiType[];
  selectedEmoji: string[];
}

export interface TaskPostEmojiType {
  id: string;
  user_id: string;
  profileImage: string;
  emoji: string;
}

export type CreateTaskCommentFormType = Pick<TaskCommentType, "contents">;

export type CreateTaskEmojiType = Pick<TaskPostEmojiType, "emoji">;

export interface CreateTaskEmojiResponseType {
  id: string;
  emoji: string;
  user_id: string;
  userinfo: { profileImage: string };
}

export interface GetTaskConfirmResponseType extends CommonResponseType {
  data: TaskConfirmType;
}

export interface GetTaskConfirmListResponseType extends CommonResponseType {
  data: TaskConfirmType[];
}

export type CreateCommentFormType = Pick<TaskCommentType, "contents">;

export type UpdateCommentFormType = Pick<TaskCommentType, "contents" | "id">;

export interface CreateCommentEmojiType {
  emoji: string;
  commentId: string;
}

export interface CommentEmojiType {
  emoji: string;
  count: number;
}

export interface GetTaskCommentResponseType extends CommonResponseType {
  data: TaskCommentType[];
}

export interface TaskEmojiResponseType {
  emoji: string;
  user_id: string;
}
