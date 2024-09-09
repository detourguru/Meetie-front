import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase
      .from("bookmarks")
      .upsert(data, { onConflict: `"study_id", "user_id"` })
      .eq("study_id", params.id)
      .eq("user_id", data.user_id)
      .single();

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: error.message, status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
