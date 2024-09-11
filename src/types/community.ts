import type { CommonResponseType } from "@/types/common";

export interface CommunityPostType {
  id: number;
  user_id: string;
  userPosition: string;
  postDate: string;
  position: string[];
  title: string;
  images: string[];
  contents: string;
  viewCount: number;
  emojiList: CommunityPostEmojiType[];
}

export type CreateCommunityFormType = Pick<
  CommunityPostType,
  "position" | "title" | "images" | "contents"
>;

export type CreateCommunityUpdateHandlerType = <Key extends keyof CreateCommunityFormType>(
  key: Key,
  value: CreateCommunityFormType[Key],
) => void;

export interface CreateCommunityPostProps {
  createPostForm: CreateCommunityFormType;
  updateInputValue: CreateCommunityUpdateHandlerType;
}

export interface CommunityPostEmojiType {
  id: number;
  user_id: string;
  profileImage: string;
  emoji: string;
}

export type CreateCommunityEmojiType = Pick<CommunityPostEmojiType, "emoji">;

export interface CommunityEmojiResponseType {
  id: number;
  emoji: string;
  user_id: string;
  userinfo: { profileImage: string };
}

export interface GetCommunityListResponseType extends CommonResponseType {
  data: CommunityPostType[];
}

export interface GetCommunityResponseType extends CommonResponseType {
  data: CommunityPostType;
}

export interface CommunityCommentType {
  id: number;
  user_id: string;
  name: string;
  profileImage: string;
  uploadDate: string;
  contents: string;
  emojiList: CommentEmojiType[];
  selectedEmoji: string[];
}

export type CreateCommentFormType = Pick<CommunityCommentType, "contents">;

export type UpdateCommentFormType = Pick<CommunityCommentType, "contents" | "id">;

export interface CreateCommentEmojiType {
  emoji: string;
  commentId: number;
}

export interface CommentEmojiType {
  emoji: string;
  count: number;
}

export interface GetCommentsResponseType extends CommonResponseType {
  data: CommunityCommentType[];
}

export interface CommunityEmojiResponseType {
  emoji: string;
  user_id: string;
}
