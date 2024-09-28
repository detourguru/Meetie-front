import { NextResponse } from "next/server";

import { isSupabaseError } from "@/utils/supabase/error";
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
      throw new NextResponse("Error", {
        status: error.status,
        statusText: error.message,
      });
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    if (isSupabaseError(error)) {
      return new NextResponse(error.statusText, {
        status: error.status,
        statusText: error.statusText,
      });
    }

    return new NextResponse("Unexpected Error", { status: 500 });
  }
}
