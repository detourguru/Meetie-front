import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request, { params }: { params: { commentId: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const { error } = await supabase.from("community_comments_emoji").insert({
      emoji: data.emoji,
      comment_id: Number(params.commentId),
    });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ error: "커뮤니티 댓글 이모지 추가 오류" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { commentId: string } }) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const emoji = searchParams.get("emoji");

    const { error } = await supabase
      .from("community_comments_emoji")
      .delete()
      .eq("comment_id", params.commentId)
      .eq("emoji", emoji);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ error: "커뮤니티 댓글 이모지 삭제 오류" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
