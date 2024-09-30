import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

interface StudyDataType {
  requestMemberList: string[];
  recruitMemberCount: number;
  joinMemberList: string[];
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const { userId, isReject } = await request.json();

    const { requestMemberList, recruitMemberCount, joinMemberList }: StudyDataType = (
      await supabase.from("study").select().eq("id", params.id).single()
    ).data;

    const updateMemberList = requestMemberList.filter((member) => member !== userId);

    if (recruitMemberCount === joinMemberList.length) {
      return NextResponse.json({ message: "error" }, { status: 400 });
    }

    const { error: patchError } = await supabase
      .from("study")
      .update({ requestMemberList: updateMemberList })
      .eq("id", params.id);

    if (!patchError && !isReject) {
      const { error: postError } = await supabase
        .from("study")
        .update({ joinMemberList: [...joinMemberList, userId] })
        .eq("id", params.id);

      if (!postError) {
        return NextResponse.json({ message: "ok", status: 200 });
      }
    } else {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", stuats: 500, data: error });
  }
}
