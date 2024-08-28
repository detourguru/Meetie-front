import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("userinfo").select().eq("id", params.id).single();

    return NextResponse.json({ message: "ok", status: 200, data: data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: number } }) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase.from("userinfo").update(data).eq("id", params.id);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
