"use client";

import { useRouter } from "next/navigation";

import Header from "@/components/common/Header/Header";

import { PATH } from "@/constants/path";

import { createClient } from "@/utils/supabase/client";

const MyPageHeader = () => {
  const router = useRouter();
  const supabase = createClient();

  const logOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.replace(PATH.LOGIN);
    }
  };

  return (
    <Header>
      <Header.Title>마이페이지</Header.Title>
      <Header.RightButton icon="/svg/ic-logout.svg" handleButtonClick={logOut} />
    </Header>
  );
};

export default MyPageHeader;
