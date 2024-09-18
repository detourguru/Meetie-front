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

    const { data, error } = await supabase
      .from("message")
      .select("*")
      .or(`receiver.eq.${params.id}, receiver.eq.${user.id}`)
      .or(`sender.eq.${params.id}, sender.eq.${user.id}`)
      .order("created_at", { ascending: true });

    console.log(data, error);

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
