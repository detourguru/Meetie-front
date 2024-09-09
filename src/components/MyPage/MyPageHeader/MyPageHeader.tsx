"use client";

import Header from "@/components/common/Header/Header";
import LogOutModal from "@/components/MyPage/MyPageHeader/LogOutModal/LogOutModal";

import { useOverlay } from "@/hooks/common/useOverlay";

const MyPageHeader = () => {
  const { isOpen, handleClose, handleOpen } = useOverlay();

  return (
    <>
      <Header>
        <Header.Title>마이페이지</Header.Title>
        <Header.RightButton icon="/svg/ic-logout.svg" handleButtonClick={handleOpen} />
      </Header>

      <LogOutModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default MyPageHeader;
