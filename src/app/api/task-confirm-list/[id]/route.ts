import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { ParamIdType } from "@/types/common";

export async function GET(request: NextRequest, { params }: ParamIdType) {
  try {
    const supabase = createClient();

    const searchParams = request.nextUrl.searchParams;

    const referenceDate = searchParams.get("referenceDate");

    const { data } = await supabase
      .from("task_confirm")
      .select()
      .eq("studyRoomId", params.id)
      .eq("referenceDate", referenceDate);

    if (data) {
      return NextResponse.json({ message: "ok", status: 200, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data: null });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
