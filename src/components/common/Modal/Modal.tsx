import type { PropsWithChildren } from "react";
import { useEffect } from "react";

import Portal from "@/components/common/Modal/Portal";

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  handleClose: () => void;
  isBackdropClosable?: boolean;
}

const Modal = ({ isOpen, handleClose, isBackdropClosable = true, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isOpen && (
        <Portal elementId="modal">
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-[99]"
            onClick={() => isBackdropClosable && handleClose()}
          />
          <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[100] bg-white rounded-2xl">
            {children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
