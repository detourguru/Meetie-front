import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();

    const { searchParams } = new URL(request.url);
    const isRecruit = searchParams.get("isRecruit") ?? "false";
    const search = searchParams.get("search") ?? "";
    const tagList = searchParams.get("tagList");
    const orderOption = searchParams.get("order") ?? "createdAt";
    const asc = Boolean(searchParams.get("asc")) ?? false;
    const dateOption = searchParams.get("date") ?? "all";

    const tagArray = tagList ? tagList.split(",") : [];

    let query = supabase.from("study").select();

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
      query = query.gte("createdAt", new Date(date).toISOString());
    }

    if (isRecruit && isRecruit !== "false") {
      query.eq("isRecruit", true);
    }

    if (search && search !== "") {
      query.like("title", search);
    }

    const { data } = await query
      .contains("tagList", tagArray)
      .order(orderOption, { ascending: asc })
      .select(`*, bookmarks(isMarked)`);

    return NextResponse.json({ message: "ok", status: 200, data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
