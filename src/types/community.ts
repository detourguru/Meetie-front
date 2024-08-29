export interface CreateCommunityRequestType {
  userId: number;
  postDate: Date;
  position: string[];
  title: string;
  images: string[];
  contents: string;
}

export interface CreateCommunityFormType
  extends Omit<CreateCommunityRequestType, "userId" | "postDate"> {}

export type CreateCommunityUpdateHandlerType = <Key extends keyof CreateCommunityFormType>(
  key: Key,
  value: CreateCommunityFormType[Key],
) => void;
