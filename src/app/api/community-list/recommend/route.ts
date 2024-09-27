import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.from("community_recommend").select().limit(3);

    if (!error) {
      return NextResponse.json({ message: "ok", data }, { status: 200 });
    }

    return NextResponse.json({ error: "커뮤니티 추천 랜덤 게시글 조회 오류" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
