export interface StudyRoomRequestType {
  memberList: string[];
  title: string;
  endDate: Date | null;
  owner_id: string;
  studyId: string;
}
