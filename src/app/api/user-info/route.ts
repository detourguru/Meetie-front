import { NextResponse } from "next/server";

import { createAdminClient } from "@/utils/supabase/admin";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");

    const { data } = await supabase.from("userinfo").select().eq("user_id", userId).single();

    return NextResponse.json({ message: "ok", status: 200, data: data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const newUserId = "fec5fdee-2a98-4e90-b40e-1c321fd79718";

    const supabase = createClient();
    const supabaseAdmin = createAdminClient();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("user_id");

    if (userId) {
      Promise.all([
        supabase.from("task_confirm").update({ user_id: newUserId }).eq("user_id", userId),
        supabase.from("task").update({ user_id: newUserId }).eq("user_id", userId),
        supabase.from("study_room").update({ owner_id: newUserId }).eq("owner_id", userId),
        supabase.from("study").update({ user_id: newUserId }).eq("user_id", userId),
        supabase.from("community").update({ user_id: newUserId }).eq("user_id", userId),
      ])
        .then(async () => {
          const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

          if (!error) {
            return NextResponse.json({ message: "ok" }, { status: 200 });
          }
          return NextResponse.json({ message: "error" }, { status: 400 });
        })
        .catch((error) => {
          return NextResponse.json({ message: error.error }, { status: 400 });
        });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
