export interface CreateCommunityRequestType {
  id: number;
  userId: number;
  userPosition: string;
  postDate: Date;
  position: string[];
  title: string;
  images: string[];
  contents: string;
  viewCount: number;
}

export interface CreateCommunityFormType
  extends Pick<CreateCommunityRequestType, "position" | "title" | "images" | "contents"> {}

export type CreateCommunityUpdateHandlerType = <Key extends keyof CreateCommunityFormType>(
  key: Key,
  value: CreateCommunityFormType[Key],
) => void;

export interface CreateCommunityPostProps {
  createPostForm: CreateCommunityFormType;
  updateInputValue: CreateCommunityUpdateHandlerType;
}
