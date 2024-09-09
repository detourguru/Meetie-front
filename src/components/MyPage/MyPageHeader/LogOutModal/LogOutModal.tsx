"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";

import { PATH } from "@/constants/path";

import { createClient } from "@/utils/supabase/client";

interface LogOutModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const LogOutModal = ({ isOpen, handleClose }: LogOutModalProps) => {
  const router = useRouter();
  const supabase = createClient();

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.replace(PATH.LOGIN);
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isBackdropClosable={false}>
      <div className="px-4 pt-7 pb-4 w-[300px]">
        <h2 className="text-semibold-18 mb-5 text-center">로그아웃</h2>
        <p className="whitespace-pre-line text-center">정말 로그아웃할까요?</p>

        <div className="flex items-center justify-center gap-2 h-[64px] mt-[18px]">
          <Button variant="outline" size="sm" onClick={handleClose}>
            <p className="text-[#adb5bd] text-medium-16">취소</p>
          </Button>
          <Button size="sm" onClick={logOut}>
            <p className="text-medium-16 text-white">확인</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
