import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { CreateTaskEmojiResponseType } from "@/types/taskConfirm";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();
    const { data } = await supabase
      .from("task_confirm")
      .select(`*, task_emoji (id, emoji, user_id, userinfo (profileImage))`)
      .eq("id", params.id)
      .single();

    const emojiList: CreateTaskEmojiResponseType[] = data.task_emoji ?? [];

    if (data) {
      return NextResponse.json(
        {
          message: "ok",
          data: {
            ...data,
            emojiList: emojiList.map((emoji) => ({
              ...emoji,
              profileImage: emoji.userinfo.profileImage,
            })),
          },
        },
        { status: 200 },
      );
    }

    return NextResponse.json({ message: "ok", data: null }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase.from("task_confirm").update(data).eq("id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.from("task_confirm").delete().eq("id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
