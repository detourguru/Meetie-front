import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error } = await supabase.from("schedule").insert(data);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
