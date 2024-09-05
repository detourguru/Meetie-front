import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();

    const supabase = createClient();

    const user = (await supabase.auth.getUser()).data.user;

    const { error } = await supabase.from("community_comments").insert({
      ...data,
      user_id: user?.id,
      community_id: Number(params.id),
      uploadDate: new Date(),
    });

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }
    return NextResponse.json({ message: "ok", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
