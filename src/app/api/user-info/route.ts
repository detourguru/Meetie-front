import { NextResponse } from "next/server";

import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");

    const query = supabase.from("userinfo").select();
    const position = searchParams.get("position") ?? "";
    const styles = searchParams.get("styles") ?? "";

    const search = searchParams.get("search") ?? "";

    if (position !== "") {
      query.eq("position", position);
    }

    if (styles !== "") {
      query.contains("styles", [styles]);
    }

    if (search && search !== "") {
      query.like("name", `%${search}%`);
    }

    if (userId) {
      query.eq("user_id", userId).single();
    }
    const { data } = await query;

    const currentDate = new Date().toISOString();

    const [studyList, lastStudyList] = await Promise.all([
      supabase.from("study_room").select("id").in("id", data.studyList).gt("endDate", currentDate),
      supabase.from("study_room").select("id").in("id", data.studyList).lte("endDate", currentDate),
    ]);

    return NextResponse.json({
      message: "ok",
      status: 200,
      data,
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
