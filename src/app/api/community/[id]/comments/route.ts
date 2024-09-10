import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { CommentEmojiType, CommunityEmojiResponseType } from "@/types/community";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const user = (await supabase.auth.getUser()).data.user;

    const { data } = await supabase
      .from("community_comments")
      .select("*, userinfo ( name, profileImage ), community_comments_emoji (emoji, user_id)")
      .eq("community_id", params.id)
      .order("uploadDate", { ascending: true });

    if (data && user) {
      return NextResponse.json(
        {
          message: "ok",
          data: data.map((comment) => {
            const emojiReactions = comment.community_comments_emoji.reduce(
              (acc: { [key: string]: CommentEmojiType }, reaction: CommunityEmojiResponseType) => {
                if (!acc[reaction.emoji]) {
                  acc[reaction.emoji] = { emoji: reaction.emoji, count: 0, user_ids: [] };
                }
                acc[reaction.emoji].count += 1;
                acc[reaction.emoji].user_ids.push(reaction.user_id);
                return acc;
              },
              {},
            );

            const userSelectedEmoji = comment.community_comments_emoji
              .filter((reaction: CommunityEmojiResponseType) => reaction.user_id === user.id)
              .map((emoji: CommunityEmojiResponseType) => emoji.emoji);

            return {
              ...comment,
              name: comment.userinfo.name,
              profileImage: comment.userinfo.profileImage,
              emojiList: Object.values(emojiReactions),
              selectedEmoji: userSelectedEmoji,
            };
          }),
        },
        { status: 200 },
      );
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const user = (await supabase.auth.getUser()).data.user;

    const { error } = await supabase.from("community_comments").insert({
      ...data,
      user_id: user?.id,
      community_id: Number(params.id),
    });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
