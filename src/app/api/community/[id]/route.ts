import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { CommunityEmojiResponseType } from "@/types/community";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase
      .from("community")
      .select(
        `*, community_emoji (id, emoji, user_id, userinfo (profileImage)), userinfo (position)`,
      )
      .eq("id", params.id)
      .single();

    const emojiList: CommunityEmojiResponseType[] = data.community_emoji ?? [];

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
            userPosition: data.userinfo.position,
          },
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "get community error" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase.from("community").update(data).eq("id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "patch community error" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.from("community").delete().eq("id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "delete community error" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
