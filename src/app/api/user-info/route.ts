import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

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
