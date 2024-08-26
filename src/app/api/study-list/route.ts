import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function GET() {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("study").select();

    return NextResponse.json({ message: "ok", status: 200, data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
