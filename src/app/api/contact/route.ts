import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json() as { name?: string; email?: string; message?: string; website?: string };
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    if (body.website) return NextResponse.json({ ok: true });
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      return NextResponse.json({ error: "Invalid form" }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
