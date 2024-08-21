"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { createClient } from "@/utils/supabase/client";

// 이후 온보딩 여부를 DB에서 가져와 체크후
// 온보딩된 유저면 /study-room/list로 (로그인 상황)
// 온보딩이 안된 유저면 /walk-through로 이동 (회원가입 상황)

// 현재는 그냥 /walk-through로 이동

export default function RedirectPage() {
  const supabase = createClient();

  const router = useRouter();

  (async () => {
    const user = await supabase.auth.getUser();
    console.log(user.data);
  })();

  useEffect(() => {
    router.push("/walk-through");
  }, []);

  return <div />;
}
