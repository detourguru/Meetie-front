import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request, { params }: { params: { commentId: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const { error } = await supabase.from("task_comments_emoji").insert({
      emoji: data.emoji,
      taskConfirmId: String(params.commentId),
    });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { commentId: string } }) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const emoji = searchParams.get("emoji");

    const { error } = await supabase
      .from("task_comments_emoji")
      .delete()
      .eq("comment_id", params.commentId)
      .eq("emoji", emoji);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
