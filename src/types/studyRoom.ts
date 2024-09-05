import type { CommonResponseType } from "@/types/common";

export interface StudyRoomRequestType {
  memberList: string[];
  title: string;
  endDate: Date | null;
  owner_id: string;
  studyId: string;
}

export interface StudyRoomType extends StudyRoomRequestType {
  id: string;
}

export interface GetStudyRoomResponseType extends CommonResponseType {
  data: StudyRoomType;
}
