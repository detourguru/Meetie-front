let result = {};

import { NextResponse } from "next/server";

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

    // 임시 데이터 반환
    if (Object.keys(result).length === 0) {
      return NextResponse.json({ message: "ok", status: 200, data });
    }

    return NextResponse.json({ message: "ok", status: 200, data: result });
  } catch (error) {
    return NextResponse.json({ message: "error", status: 500 });
  }
}
