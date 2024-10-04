import { useRouter } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

import { PATH } from "@/constants/path";

import { useDeleteStudyMutation } from "@/hooks/api/study/useDeleteStudyMutation";
import { useToast } from "@/hooks/common/useToast";

interface StudyDeleteModalProps {
  studyId: string;
  isOpen: boolean;
  joinMemberCount: number;
  handleClose: () => void;
}

const StudyDeleteModal = ({
  isOpen,
  studyId,
  joinMemberCount,
  handleClose,
}: StudyDeleteModalProps) => {
  const router = useRouter();

  const { mutate: deleteStudyMutation } = useDeleteStudyMutation();

  const toast = useToast();

  const handleDeleteStudy = () => {
    if (joinMemberCount > 0) {
      toast.toast({
        title: "참여 멤버가 0명일때만 삭제 가능합니다",
      });

      return;
    }

    deleteStudyMutation(studyId, {
      onSuccess: () => {
        router.push(PATH.STUDY_ROOM_LIST);
      },
    });
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isBackdropClosable={false}>
      <div className="px-4 pt-7 pb-4 w-[300px]">
        <h2 className="text-semibold-18 mb-5 text-center">스터디를 삭제하시겠어요?</h2>
        <p className="whitespace-pre-line text-center">{`삭제하시면 스터디 내용은\n되돌릴 수 없습니다.`}</p>

        <div className="flex items-center justify-center gap-2 h-[64px] mt-[18px]">
          <Button variant="outline" size="sm" onClick={handleClose}>
            <p className="text-[#adb5bd] text-medium-16">취소</p>
          </Button>
          <Button size="sm" onClick={handleDeleteStudy}>
            <p className="text-medium-16 text-white">삭제하기</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default StudyDeleteModal;
