import { NextResponse } from "next/server";

import { COMMUNITY_REACT_DATA } from "@/constants/community";

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
            const emojies: CommunityEmojiResponseType[] = comment.community_comments_emoji;

            const emojiReactions = COMMUNITY_REACT_DATA.reduce(
              (acc: { [key: string]: CommentEmojiType }, reaction: string) => {
                const emojiList = emojies.filter((emoji) => emoji.emoji === reaction);

                if (emojiList.length) {
                  acc[reaction] = { emoji: reaction, count: emojiList.length };
                }
                return acc;
              },
              {},
            );

            const userSelectedEmoji = emojies
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

    return NextResponse.json({ error: "커뮤니티 댓글 조회 오류" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
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

    return NextResponse.json({ error: "커뮤니티 댓글 추가 오류" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
