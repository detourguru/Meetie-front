import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("study_room").select().eq("id", params.id).single();

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
