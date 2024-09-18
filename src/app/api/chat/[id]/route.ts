import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { data } = await supabase
      .from("message")
      .select("*")
      .eq("studyRoomId", params.id)
      .order("created_at", { ascending: true });

    if (data) {
      return NextResponse.json({ message: "ok", data }, { status: 200 });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    }

    const data = await request.json();

    const { error } = await supabase.from("message").insert({
      message: data.message,
      sender: user.id,
      studyRoomId: params.id,
    });

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
