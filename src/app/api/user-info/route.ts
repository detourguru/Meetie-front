import { NextResponse } from "next/server";

import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);

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

    const { data } = await query;

    return NextResponse.json(
      {
        message: "ok",
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const newUserId = "5ab41232-60fd-4c98-9b1c-9a9fc8e2b4ca";

    const supabase = createClient();
    const supabaseAdmin = createAdminClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");

    if (!userId) {
      return NextResponse.json({ message: "error" }, { status: 400, statusText: "get user error" });
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
        return NextResponse.json(
          { message: "withdrawal error" },
          { status: 400, statusText: "withdrawal error" },
        );
      })
      .catch((error) => {
        return NextResponse.json(
          { message: error.error },
          { status: 400, statusText: error.error },
        );
      });

    return NextResponse.json(
      { message: res.statusText },
      { status: res.status, statusText: res.statusText },
    );
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
      return NextResponse.json(
        { message: error.message },
        { status: 400, statusText: "sigh up error" },
      );
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
