import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

type Body = {
  email?: string;
  industry?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WAITLIST_LIST = "fylmkit_waitlist";
const SOURCE = "fylmkit";

function emailOk(value: string) {
  return EMAIL_RE.test(value) && value.length < 320;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — bots that fill hidden fields get a silent success.
  if ((body.website || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email || "").trim().toLowerCase();
  const industry = (body.industry || "").trim().slice(0, 120);

  if (!emailOk(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address" },
      { status: 400 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();

    const { data: existing, error: selectError } = await supabase
      .from("newsletter_subscribers")
      .select("lists, opt_in_studio, opt_in_skedvio, source")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      console.error("waitlist select failed", selectError);
      return NextResponse.json(
        { ok: false, error: "Could not save signup. Try again." },
        { status: 500 },
      );
    }

    const lists = new Set<string>(existing?.lists ?? []);
    lists.add(WAITLIST_LIST);
    for (const item of Array.from(lists)) {
      if (item.startsWith("industry:")) lists.delete(item);
    }
    if (industry) lists.add(`industry:${industry}`);

    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email,
        source: existing?.source || SOURCE,
        lists: Array.from(lists),
        opt_in_studio: Boolean(existing?.opt_in_studio),
        opt_in_skedvio: Boolean(existing?.opt_in_skedvio),
        consent_at: new Date().toISOString(),
        unsubscribed_at: null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("waitlist upsert failed", error);
      return NextResponse.json(
        { ok: false, error: "Could not save signup. Try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("waitlist submit failed", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Waitlist is not configured yet. Check Supabase env vars.",
      },
      { status: 500 },
    );
  }
}
