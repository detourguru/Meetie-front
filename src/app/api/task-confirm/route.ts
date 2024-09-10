import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { data: postData, error } = await supabase
      .from("task_confirm")
      .insert(data)
      .select()
      .single();

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200, data: postData.id });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
