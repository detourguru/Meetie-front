import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("task").select().eq("studyRoomId", params.id);

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
