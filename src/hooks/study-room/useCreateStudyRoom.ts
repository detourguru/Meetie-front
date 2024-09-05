import { useRouter } from "next/navigation";

import { PATH } from "@/constants/path";

import { usePostStudyRoomMutation } from "@/hooks/api/study-room/usePostStudyRoomMutation";

import type { StudyRoomRequestType } from "@/types/studyRoom";

interface UseCreateStudyRoomProps {
  studyRoomRequest: StudyRoomRequestType;
}

export const useCreateStudyRoom = ({ studyRoomRequest }: UseCreateStudyRoomProps) => {
  const { mutate: postStudyRoomMutation } = usePostStudyRoomMutation();

  const router = useRouter();

  const handleCreateStudyRoom = async () => {
    postStudyRoomMutation(studyRoomRequest, {
      onSuccess: () => {
        router.push(PATH.STUDY_ROOM_COMPLETE(studyRoomRequest.studyId));
      },
    });
  };

  return { handleCreateStudyRoom };
};
