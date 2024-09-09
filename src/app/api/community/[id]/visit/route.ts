import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { error } = await supabase.rpc("increment", { row_id: params.id });

    if (!error) {
      return NextResponse.json({ message: "ok" }, { status: 200 });
    }

    return NextResponse.json({ message: "error" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
