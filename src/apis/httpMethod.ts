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

async function fetchWrapperWithTokenHandler<Data>(uri: string, init?: RequestInit): Promise<Data> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${uri}`, init);

  try {
    const data = await response.json();
    return data as Data;
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return undefined as any;
  }
}

export function GET<Data>(input: string, init?: RequestInit) {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "GET", ...init });
}

export function POST<Data>(input: string, init?: RequestInit): Promise<Data | void> {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "POST", ...init });
}

export function PATCH<Data>(input: string, init?: RequestInit): Promise<Data | void> {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "PATCH", ...init });
}

export function DELETE<Data>(input: string, init?: RequestInit): Promise<Data | void> {
  return fetchWrapperWithTokenHandler<Data>(input, { method: "DELETE", ...init });
}
