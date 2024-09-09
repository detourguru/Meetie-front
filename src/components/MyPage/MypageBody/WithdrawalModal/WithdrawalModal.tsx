import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

interface WithdrawalModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleComfirm: () => void;
}

const WithdrawalModal = ({ isOpen, handleClose, handleComfirm }: WithdrawalModalProps) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isBackdropClosable={false}>
      <div className="px-4 pt-7 pb-4 w-[300px]">
        <h2 className="text-semibold-18 mb-5 text-center">회원 탈퇴</h2>
        <p className="whitespace-pre-line text-center">{`정말 탈퇴하시나요?\n계정을 삭제하면 스터디, 게시글, 댓글 외의 모든 정보가 삭제됩니다.`}</p>

        <div className="flex items-center justify-center gap-2 h-[64px] mt-[18px]">
          <Button variant="outline" size="sm" onClick={handleClose}>
            <p className="text-[#adb5bd] text-medium-16">취소</p>
          </Button>
          <Button size="sm" onClick={handleComfirm}>
            <p className="text-medium-16 text-white">확인</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawalModal;
