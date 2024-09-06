import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const data = await request.json();
    const { data: user } = await supabase.from("userinfo").select("user_id").single();
    const { error } = await supabase.from("task_confirm").insert({
      ...data,
      user_id: user?.user_id,
    });

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }
    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
