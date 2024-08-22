import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

interface postDataTypes {
  position: string;
  purpose: string[];
  style: string[];
  period: string;
}

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const postData: postDataTypes = await request.json();

    const { error } = await supabase.from("onboarding").insert([postData]);

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (err) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}

export async function GET() {
  try {
    const data = {
      job: "developer",
      purpose: ["자기 개발"],
      style: ["주도적인", "열정적인"],
      period: "1개월 이내",
    };

    // 임시 데이터 반환
    return NextResponse.json({ message: "ok", status: 200, data });
    // if (Object.keys(result).length === 0) {
    //   return NextResponse.json({ message: "ok", status: 200, data });
    // }

    // return NextResponse.json({ message: "ok", status: 200, data: result });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
