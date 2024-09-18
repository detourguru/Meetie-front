import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = createClient();

    const [ownerCount, taskCount, communityCount, communityCommentsCount, communityEmojiCount] =
      await Promise.all([
        supabase.from("study_room").select("id", { count: "exact" }),
        supabase.from("task_confirm").select("id", { count: "exact" }),
        supabase.from("community").select("id", { count: "exact" }),
        supabase.from("community_comments").select("id", { count: "exact" }),
        supabase.from("community_emoji").select("id", { count: "exact" }),
      ]);

    return NextResponse.json({
      message: "ok",
      status: 200,
      data: {
        ownerCount: ownerCount.count ?? 0,
        taskCount: taskCount.count ?? 0,
        communityCount: communityCount.count ?? 0,
        communityCommentsCount: communityCommentsCount.count ?? 0,
        communityEmojiCount: communityEmojiCount.count ?? 0,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}
