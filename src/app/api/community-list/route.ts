import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const supabase = createClient();

    let query = supabase.from("community").select(`*, userinfo (position)`);

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") ?? "";
    const tags = searchParams.get("tags");
    const sortOption = searchParams.get("sort") ?? "id";
    const dateOption = searchParams.get("date") ?? "all";

    const positionTags = tags ? tags.split(",") : [];

    let date: number | null;

    switch (dateOption) {
      case "day":
        date = new Date().setHours(0, 0, 0, 0);
        break;
      case "week":
        date = new Date().setDate(new Date().getDate() - 7);
        break;
      case "month":
        date = new Date().setMonth(new Date().getMonth() - 1);
        break;
      case "year":
        date = new Date().setFullYear(new Date().getFullYear() - 1);
        break;
      default:
        date = null;
    }

    if (date) {
      query = query.gte("postDate", new Date(date).toISOString());
    }

    const { data, error } = await query
      .like("title", `%${search}%`)
      .contains("position", positionTags)
      .order(sortOption, { ascending: false });

    if (!error) {
      return NextResponse.json(
        {
          message: "ok",
          data: data.map((data) => ({ ...data, userPosition: data.userinfo.position })),
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "error" },
      { status: 400, statusText: "커뮤니티 게시글 리스트 조회 오류" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
