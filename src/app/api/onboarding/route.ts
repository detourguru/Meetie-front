export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (data) {
      return new Response(JSON.stringify({ message: "ok", status: 200 }));
    }

    return new Response(JSON.stringify({ message: "error", status: 400 }));
  } catch (err) {
    return new Response(JSON.stringify({ message: "error", status: 500 }));
  }
}
