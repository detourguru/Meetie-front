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
}

export interface CreateCommunityFormType
  extends Pick<CommunityPostType, "position" | "title" | "images" | "contents"> {}

export type CreateCommunityUpdateHandlerType = <Key extends keyof CreateCommunityFormType>(
  key: Key,
  value: CreateCommunityFormType[Key],
) => void;

export interface CreateCommunityPostProps {
  createPostForm: CreateCommunityFormType;
  updateInputValue: CreateCommunityUpdateHandlerType;
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
  emojiList: string[];
}

export interface CreateCommentFormType extends Pick<CommunityCommentType, "contents"> {}

export interface GetCommentsResponseType extends CommonResponseType {
  data: CommunityCommentType[];
}
