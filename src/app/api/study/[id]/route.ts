import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function POST(request: Request) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase.from("study").insert(data);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase.from("study").select().eq("studyId", params.id);

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data: data[0] });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
