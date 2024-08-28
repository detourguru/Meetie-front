import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

interface StudyDeleteModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const StudyDeleteModal = ({ isOpen, handleClose }: StudyDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isBackdropClosable={false}>
      <div className="px-4 pt-7 pb-4 w-[300px]">
        <h2 className="text-semibold-18 mb-5 text-center">스터디를 삭제하시겠어요?</h2>
        <p className="whitespace-pre-line text-center">{`삭제하시면 스터디 내용은\n되돌릴 수 없습니다.`}</p>

        <div className="flex items-center justify-center gap-2 h-[64px] mt-[18px]">
          <Button variant="outline" size="sm" onClick={handleClose}>
            <p className="text-[#adb5bd] text-medium-16">취소</p>
          </Button>
          <Button size="sm">
            <p className="text-medium-16 text-white">삭제하기</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default StudyDeleteModal;
