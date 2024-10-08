import { NextResponse } from "next/server";

import type { LoginFormType } from "@/hooks/login/useLoginForm";

import { createClient } from "@/utils/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    const postData: LoginFormType = await request.json();

    const { error } = await supabase.auth.signInWithPassword({
      email: postData.email,
      password: postData.password,
    });

    if (error) {
      const { data: loginData, error: loginError } = await supabase
        .from("userinfo")
        .select("email")
        .eq("email", postData.email)
        .single();

      if (loginError) {
        return NextResponse.json(
          { message: "error" },
          {
            status: 400,
            statusText: "not exist user error",
          },
        );
      }

      if (loginData) {
        return NextResponse.json(
          { message: "error" },
          {
            status: 400,
            statusText: "wrong password error",
          },
        );
      }

      return NextResponse.json(
        { message: "error" },
        {
          status: 400,
          statusText: "fail to login error",
        },
      );
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "error", data: error },
      { status: 500, statusText: "server error" },
    );
  }
}
