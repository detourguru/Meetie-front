import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();

    const requestData = await request.json();

    const { data } = await supabase.from("study_room").insert(requestData).select().single();

    const { error: endDateStudyError } = await supabase
      .from("study")
      .update({ isRecruit: false })
      .eq("id", requestData.studyId);

    requestData.memberList.map(async (member: string) => {
      const { studyList } = (
        await supabase.from("userinfo").select().eq("user_id", member).single()
      ).data;

      await supabase
        .from("userinfo")
        .update({ studyList: [...studyList, data.id] })
        .eq("user_id", member);
    });

    if (!endDateStudyError) {
      return NextResponse.json({ message: "ok", data: requestData.studyId }, { status: 200 });
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
