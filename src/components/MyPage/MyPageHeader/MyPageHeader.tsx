"use client";

import { useRouter } from "next/navigation";

import ConfirmModal from "@/components/common/ConfirmModal/ConfirmModal";
import Header from "@/components/common/Header/Header";

import { PATH } from "@/constants/path";

import { useOverlay } from "@/hooks/common/useOverlay";

import { createClient } from "@/utils/supabase/client";

const MyPageHeader = () => {
  const router = useRouter();
  const supabase = createClient();
  const { isOpen, handleClose, handleOpen } = useOverlay();

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.replace(PATH.LOGIN);
    }
  };

  return (
    <>
      <Header>
        <Header.Title>마이페이지</Header.Title>
        <Header.RightButton icon="/svg/ic-logout.svg" handleButtonClick={handleOpen} />
      </Header>

      <ConfirmModal
        isOpen={isOpen}
        handleClose={handleClose}
        handleConfirm={logOut}
        title="로그아웃"
        description="정말 로그아웃할까요?"
      />
    </>
  );
};

export default MyPageHeader;
