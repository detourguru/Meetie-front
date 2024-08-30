"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { PATH } from "@/constants/path";

import { useOnboardingCompleteQuery } from "@/hooks/api/onboarding/useOnboardingCompleteQuery";

// 이후 온보딩 여부를 DB에서 가져와 체크후
// 온보딩된 유저면 /study-room/list로 (로그인 상황)
// 온보딩이 안된 유저면 /walk-through로 이동 (회원가입 상황)

// 현재는 그냥 /walk-through로 이동

export default function RedirectPage() {
  const router = useRouter();
  const { isExist } = useOnboardingCompleteQuery();

  useEffect(() => {
    if (isExist) {
      router.push(PATH.STUDY_ROOM_LIST);
    } else {
      router.push(PATH.WALKTHROUGH);
    }
  }, [isExist]);

  return <div />;
}
