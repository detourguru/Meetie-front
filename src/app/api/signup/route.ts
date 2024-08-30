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
        },
      },
    });

    if (!error) {
      return NextResponse.json({ message: "ok", status: 200 });
    }

    return NextResponse.json({ message: "error", status: 400 });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
