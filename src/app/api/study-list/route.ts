import { type NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/client";

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();
    const searchParams = request.nextUrl.searchParams;
    const asc = Boolean(searchParams.get("asc")) ?? false;

    const query = supabase.from("study").select();

    if (searchParams.size > 0) {
      const sortFields = ["order", "asc"];
      searchParams.forEach((value, key) => {
        if (sortFields.includes(key)) {
          // default: createdAt
          query.order(searchParams.get("order") ?? "createdAt", { ascending: asc });
        } else {
          if (!(value === "false" && key === "iRecruit")) query.eq(key, value);
        }
      });
    }

    const { data } = await query.select();

    return NextResponse.json({ message: "ok", status: 200, data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
