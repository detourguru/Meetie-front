import { NextResponse, type NextRequest } from "next/server";

import { createServerClient } from "@supabase/ssr";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/") {
      const url = request.nextUrl.clone();

      url.pathname = "/walk-through";

      return NextResponse.redirect(url);
    }

    if (
      request.nextUrl.pathname === "/walk-through" ||
      request.nextUrl.pathname === "/onboarding"
    ) {
      const { data } = await supabase
        .from("userinfo")
        .select("onboardingCheck")
        .eq("user_id", user.id)
        .single();

      if (data && data.onboardingCheck) {
        const url = request.nextUrl.clone();

        url.pathname = "/study-room/list";

        return NextResponse.redirect(url);
      }
    }
  }

  if (
    !user &&
    request.nextUrl.pathname !== "/login" &&
    request.nextUrl.pathname !== "/signup" &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/api/signup" &&
    request.nextUrl.pathname !== "/auth/callback"
  ) {
    const url = request.nextUrl.clone();

    url.pathname = "/login";

    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
