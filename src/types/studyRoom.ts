import type { CommonResponseType } from "@/types/common";

export interface StudyRoomRequestType {
  memberList: string[];
  title: string;
  endDate: Date | null;
  owner_id: string;
  studyId: string;
}

export interface GetStudyRoomResponseType extends CommonResponseType {
  data: StudyRoomRequestType;
}
