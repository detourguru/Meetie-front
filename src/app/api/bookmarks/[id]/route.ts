import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const data = await request.json();
    console.log(data);
    const { error } = await supabase
      .from("bookmarks")
      .upsert(data, { onConflict: "userinfo_userId" })
      .eq("study_id", params.id)
      .eq("userinfo_userId", 7)
      .single();

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: error.message, status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
