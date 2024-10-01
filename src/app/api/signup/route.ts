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
      const { data: signupData, error: signupError } = await supabase
        .from("userinfo")
        .select("email")
        .eq("email", postData.email)
        .single();

      if (signupData) {
        // return NextResponse.json("Error", {
        //   status: 400,
        //   statusText: "Exist User",
        // });
        throw new NextResponse("이미 존재하는 사용자입니다.", {
          status: 400,
          statusText: "A",
        });
      }

      if (signupError) {
        return NextResponse.json("Error", { status: 422, statusText: "Signup Error" });
      }

      return NextResponse.json("Error", {
        status: error.status,
        statusText: error.message,
      });
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("에러?", error);

    return NextResponse.json({ message: "error" }, { status: 500, statusText: "이건가?" });
  }
}
