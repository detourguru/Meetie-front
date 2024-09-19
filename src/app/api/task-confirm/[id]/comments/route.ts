import { NextResponse } from "next/server";

import { TASK_CONFIRM_REACT_DATA } from "@/constants/taskConfirm";

import { createClient } from "@/utils/supabase/server";

import type { CommentEmojiType, TaskEmojiResponseType } from "@/types/taskConfirm";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const user = (await supabase.auth.getUser()).data.user;

    const { data } = await supabase
      .from("task_comments")
      .select("*, userinfo ( name, profileImage ), task_comments_emoji (emoji, user_id)")
      .eq("taskConfirmId", params.id)
      .order("created_at", { ascending: true });

    if (data && user) {
      return NextResponse.json(
        {
          message: "ok",
          data: data.map((comment) => {
            const emojies: TaskEmojiResponseType[] = comment.task_comments_emoji;

            const emojiReactions = TASK_CONFIRM_REACT_DATA.reduce(
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
              .filter((reaction: TaskEmojiResponseType) => reaction.user_id === user.id)
              .map((emoji: TaskEmojiResponseType) => emoji.emoji);

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
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const user = (await supabase.auth.getUser()).data.user;

    const { error } = await supabase.from("task_comments").insert({
      ...data,
      user_id: user?.id,
      taskConfirmId: String(params.id),
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
