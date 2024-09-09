import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  handleClose: () => void;
  handleConfirm: () => void;
}

const ConfirmModal = ({
  isOpen,
  title,
  description,
  handleClose,
  handleConfirm,
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isBackdropClosable={false}>
      <div className="px-4 pt-7 pb-4 w-[300px]">
        <h2 className="text-semibold-18 mb-5 text-center">{title}</h2>
        <p className="whitespace-pre-line text-center">{description}</p>

        <div className="flex items-center justify-center gap-2 h-[64px] mt-[18px]">
          <Button variant="outline" size="sm" onClick={handleClose}>
            <p className="text-[#adb5bd] text-medium-16">취소</p>
          </Button>
          <Button size="sm" onClick={handleConfirm}>
            <p className="text-medium-16 text-white">확인</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
