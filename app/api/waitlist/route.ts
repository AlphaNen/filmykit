import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type Body = {
  email?: string;
  industry?: string;
};

const emailOk = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length < 320;

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const industry = (body.industry || "").trim().slice(0, 120);

  if (!emailOk(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address" },
      { status: 400 },
    );
  }

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "waitlist.jsonl");
  const row = JSON.stringify({
    email,
    industry: industry || null,
    at: new Date().toISOString(),
  });

  try {
    await mkdir(dir, { recursive: true });
    await appendFile(file, `${row}\n`, "utf8");
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not save signup. Try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
