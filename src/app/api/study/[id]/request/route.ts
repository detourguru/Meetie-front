import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient();

    const userId = await request.json();

    const requestMemberList: string[] = (
      await supabase.from("study").select().eq("id", params.id).single()
    ).data.requestMemberList;

    const updateMemberList = requestMemberList.filter((member) => member !== userId.userId);

    const { error: patchError } = await supabase
      .from("study")
      .update({ requestMemberList: updateMemberList })
      .eq("id", params.id);

    const { error: postError } = await supabase
      .from("study")
      .update({ joinMemberList: [userId.userId] })
      .eq("id", params.id);

    if (!patchError && !postError) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", stuats: 500, data: error });
  }
}
