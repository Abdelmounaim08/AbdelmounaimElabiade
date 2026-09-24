import { NextResponse } from "next/server";

const recipient = "abdomel2002@gmail.com";

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
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio contact <onboarding@resend.dev>";
    if (!apiKey) {
      return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Nouveau projet de ${name}`,
        text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
