import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("study").select().eq("id", params.id);

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data: data[0] });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
