import type { CommonResponseType } from "@/types/common";

interface MessageType {
  message: string;
  sender: string;
  created_at: string;
  id: number;
}

export interface GetMessageListResponseType extends CommonResponseType {
  data: MessageType[];
}

export interface GetMessageResponseType extends CommonResponseType {
  data: MessageType;
}

export interface GetUnReadMessageCountResponseType extends CommonResponseType {
  data: number;
}
