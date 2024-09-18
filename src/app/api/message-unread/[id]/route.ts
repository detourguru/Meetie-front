import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    }

    const { data } = await supabase
      .from("message")
      .select("id")
      .neq("sender", user.id)
      .eq("isRead", false)
      .eq("studyRoomId", params.id);

    console.log(data);

    if (data) {
      return NextResponse.json({ message: "ok", data: data.length }, { status: 200 });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    }

    const { data, error } = await supabase
      .from("message")
      .update({ isRead: true })
      .neq("sender", user.id)
      .eq("studyRoomId", params.id);

    if (data) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    if (!error && !data) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
