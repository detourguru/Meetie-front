import { NextResponse } from "next/server";

import { getCommentBadge, getFeedbackBadge, getMeetieBadge, getNanumBadge } from "@/utils/badge";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase
      .from("userinfo")
      .select(`*, bookmarks (study_id, isMarked)`)
      .eq("user_id", params.id)
      .single();

    const currentDate = new Date().toISOString();

    const bookmarks = data.bookmarks
      .filter((bookmark: { study_id: string; isMarked: boolean }) => bookmark.isMarked)
      .map((bookmark: { study_id: string; isMarked: boolean }) => bookmark.study_id);

    const [
      studyListData,
      lastStudyListData,
      bookmarkStudyList,

      ownerCount,
      taskCount,
      communityCount,
      communityCommentsCount,
      communityEmojiCount,
    ] = await Promise.all([
      supabase.from("study_room").select("id").in("id", data.studyList).gt("endDate", currentDate),
      supabase.from("study_room").select("id").in("id", data.studyList).lte("endDate", currentDate),
      supabase.from("study").select(`*, bookmarks(isMarked)`).in("id", bookmarks),

      supabase.from("study_room").select("id", { count: "exact" }).eq("user_id", params.id),
      supabase.from("task_confirm").select("id", { count: "exact" }).eq("user_id", params.id),
      supabase.from("community").select("id", { count: "exact" }).eq("user_id", params.id),
      supabase.from("community_comments").select("id", { count: "exact" }).eq("user_id", params.id),
      supabase.from("community_emoji").select("id", { count: "exact" }).eq("user_id", params.id),
    ]);

    const communityEngagementCount =
      (communityCommentsCount.count ?? 0) + (communityEmojiCount.count ?? 0);

    const studyList = studyListData.data?.map((study: { id: string }) => study.id) ?? [];
    const lastStudyList = lastStudyListData.data?.map((study: { id: string }) => study.id) ?? [];

    return NextResponse.json({
      message: "ok",
      status: 200,
      data: {
        ...data,
        studyList: studyList,
        lastStudyList: lastStudyList,
        scrapList: bookmarkStudyList.data,
        badges: {
          comment: getCommentBadge(communityCommentsCount.count ?? 0),
          nanum: getNanumBadge(communityCount.count ?? 0, communityEngagementCount),
          meetie: getMeetieBadge(taskCount.count ?? 0, ownerCount.count ?? 0),
          feedback: getFeedbackBadge(communityEngagementCount),
        },
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase.from("userinfo").update(data).eq("user_id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
