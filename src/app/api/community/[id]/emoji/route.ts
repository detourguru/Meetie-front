import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const { error } = await supabase.from("community_emoji").insert({
      ...data,
      community_id: Number(params.id),
    });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ error: "커뮤니티 이미지 추가 오류" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.from("community_emoji").delete().eq("community_id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ error: "커뮤니티 이미지 삭제 오류" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
