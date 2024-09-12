import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error: createStudyRoomError } = await supabase.from("study_room").insert(data);

    if (!createStudyRoomError) {
      const { error: endDateStudyError } = await supabase
        .from("study")
        .update({ isRecruit: false })
        .eq("id", data.studyId);

      if (!endDateStudyError) {
        return NextResponse.json({ message: "ok", data: data.studyId }, { status: 200 });
      }
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "잘못된 요청입니다" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500, statusText: "서버 오류 발생" });
  }
}
