import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function DELETE(request: Request, { params }: { params: { emojiId: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.from("community_emoji").delete().eq("id", params.emojiId);

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
