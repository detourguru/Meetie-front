import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { OnboardingFormType } from "@/types/onboarding";

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const postData: OnboardingFormType = await request.json();

    // TODO: 이미 저장된 정보 있는 지 확인
    const { error } = await supabase.from("onboarding").insert(postData);

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
    const supabase = createClient();
    const { data, error } = await supabase.from("onboarding").select("position, styles").single();

    if (error) {
      if (error.code === "PGRST116") {
        // 온보딩 데이터가 없음
        return NextResponse.json({ message: "no data found", status: 204, data: null });
      } else {
        // 다른 오류
        return NextResponse.json({ message: error.message, status: 400 });
      }
    }

    return NextResponse.json({ message: "ok", status: 200, data });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
