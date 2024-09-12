import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();

    const data = await request.json();

    const { error: createStudyRoomError } = await supabase.from("study_room").insert(data);

    if (!createStudyRoomError) {
      // const { error: deleteStudyError } = await supabase
      //   .from("study")
      //   .delete()
      //   .eq("id", data.studyId);

      const { error: endDateStudyError } = await supabase
        .from("study")
        .update({ isRecruit: false })
        .eq("id", data.studyId);

      if (!endDateStudyError) {
        return NextResponse.json({ message: "ok", status: 200, data: data.studyId });
      }
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error", status: 500 });
  }
}
