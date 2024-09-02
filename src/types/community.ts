import type { CommonResponseType } from "@/types/common";

export interface CommunityPostType {
  id: number;
  userId: number;
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

export interface FilterSelectedType {
  tags: string[];
  sort: string;
  date: string;
}

export type UpdateFilterSelectedTypeHandlerType = <Key extends keyof FilterSelectedType>(
  key: Key,
  value: FilterSelectedType[Key],
) => void;
