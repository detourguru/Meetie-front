import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  try {
    const supabase = createClient();

    let query = supabase.from("community").select();

    const { searchParams } = new URL(request.url);
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

    const { data } = await query
      .contains("position", positionTags)
      .order(sortOption, { ascending: false });

    return NextResponse.json({ message: "ok", status: 200, data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}