import * as Sentry from "@sentry/nextjs";

export function createInit<Body extends object>(
  body?: Body,
  cache: RequestCache = "no-store",
): RequestInit {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache,
  };
}

async function fetchWrapperWithTokenHandler<Data>(uri: string, init?: RequestInit) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${uri}`, init);

  if (!response.ok) {
    Sentry.withScope((scope) => {
      scope.setLevel("error");
      Sentry.captureMessage(`[APIError] ${window.location.href} :: ${response.statusText}`);
    });

    throw new Error(response.statusText);
  }

  try {
    const data = await response.json();
    return data as Data;
  } catch (error) {
    console.error(error);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return undefined as any;
  }
}

export function GET<Data>(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "GET", ...init });
}

export function POST<Data>(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "POST", ...init });
}

export function PATCH<Data>(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "PATCH", ...init });
}

export function DELETE<Data>(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "DELETE", ...init });
}
