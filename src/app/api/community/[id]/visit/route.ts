import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.rpc("increment", { row_id: params.id });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "커뮤니티 게시글 조회수 증가 오류" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
