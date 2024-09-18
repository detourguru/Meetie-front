import { NextResponse } from "next/server";

import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");

    const { data } = await supabase
      .from("userinfo")
      .select(`*, bookmarks (study_id, isMarked)`)
      .eq("user_id", userId)
      .single();

    const currentDate = new Date().toISOString();
    const bookmarks = data.bookmarks
      .filter((bookmark: { study_id: string; isMarked: boolean }) => bookmark.isMarked)
      .map((bookmark: { study_id: string; isMarked: boolean }) => bookmark.study_id);

    const [studyListData, lastStudyListData, bookmarkStudyList] = await Promise.all([
      supabase.from("study_room").select("id").in("id", data.studyList).gt("endDate", currentDate),
      supabase.from("study_room").select("id").in("id", data.studyList).lte("endDate", currentDate),
      supabase.from("study").select(`*, bookmarks(isMarked)`).in("id", bookmarks),
    ]);

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
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const newUserId = "17cadf4c-48cb-491c-8c78-326d1f116fb4";

    const supabase = createClient();
    const supabaseAdmin = createAdminClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");

    if (!userId) {
      return NextResponse.json({ message: "error" }, { status: 400 });
    }

    const res = await Promise.all([
      supabase.from("task_confirm").update({ user_id: newUserId }).eq("user_id", userId),
      supabase.from("task").update({ user_id: newUserId }).eq("user_id", userId),
      supabase.from("study_room").update({ owner_id: newUserId }).eq("owner_id", userId),
      supabase.from("study").update({ user_id: newUserId }).eq("user_id", userId),
      supabase.from("community").update({ user_id: newUserId }).eq("user_id", userId),
    ])
      .then(async () => {
        const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

        if (!error) {
          return NextResponse.json({ message: "ok" }, { status: 200, statusText: "ok" });
        }
        return NextResponse.json({ message: "error" }, { status: 400, statusText: "error" });
      })
      .catch((error) => {
        return NextResponse.json(
          { message: error.error },
          { status: 400, statusText: error.error },
        );
      });

    return NextResponse.json({ message: res.statusText }, { status: res.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const postData = await request.json();

    const { error } = await supabase
      .from("userinfo")
      .upsert({ ...postData, onboardingCheck: true });

    if (error) {
      return NextResponse.json({ message: error.message, status: 400 });
    }

    return NextResponse.json({ message: "ok", status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
