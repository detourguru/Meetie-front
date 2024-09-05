import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    await supabase.rpc("increment", { row_id: params.id });
    const { data } = await supabase.from("community").select().eq("id", params.id).single();

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
