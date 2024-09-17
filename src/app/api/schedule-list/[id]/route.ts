import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("schedule").select().eq("studyRoomId", params.id);

    if (data) {
      return NextResponse.json({ message: "ok", data }, { status: 200 });
    }

    return NextResponse.json({ message: "ok", data: null }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
