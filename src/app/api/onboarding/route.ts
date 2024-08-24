let result = {};

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (data) {
      result = data;
      return new Response(JSON.stringify({ message: "ok", status: 200 }));
    }

    return new Response(JSON.stringify({ message: "error", status: 400 }));
  } catch (err) {
    // TODO: error 구체화
    return new Response(JSON.stringify({ message: "error", status: 500 }));
  }
}

export async function GET() {
  try {
    const data = {
      job: "developer",
      purpose: ["자기 개발"],
      style: ["주도적인", "열정적인"],
      period: "1개월 이내",
    };
    if (!result) {
      return new Response(JSON.stringify({ message: "ok", status: 200, data }));
    }

    return new Response(JSON.stringify({ message: "ok", status: 200, data: result }));
  } catch (error) {
    // TODO: error 구체화
    return new Response(JSON.stringify({ message: "error", status: 500 }));
  }
}
