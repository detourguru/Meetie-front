import { NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

import type { SignUpFormType } from "@/types/signup";

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const postData: SignUpFormType = await request.json();

    const { error } = await supabase.auth.signUp({
      email: postData.email,
      password: postData.password,
      options: {
        data: {
          full_name: postData.name,
          name: postData.name,
          avatar_url: "/svg/ic-user.svg",
        },
      },
    });

    if (error) {
      const { data: signupData } = await supabase
        .from("userinfo")
        .select("email")
        .eq("email", postData.email)
        .single();

      if (signupData) {
        return NextResponse.json(
          { message: "error" },
          {
            status: 400,
            statusText: "exist user error",
          },
        );
      }

      return NextResponse.json({ message: "error" }, { status: 400, statusText: "signup error" });
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "error", data: error },
      { status: 500, statusText: "server error" },
    );
  }
}
