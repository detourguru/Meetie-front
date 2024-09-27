import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.from("community_recommend").select().limit(3);

    if (!error) {
      return NextResponse.json({ message: "ok", data }, { status: 200 });
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "커뮤니티 게시글 랜덤 리스트 조회 오류" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
