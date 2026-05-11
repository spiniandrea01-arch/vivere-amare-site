import { NextRequest, NextResponse } from "next/server";

interface ParsedEvent {
  uid: string;
  summary: string;
  start: string;
  end: string;
  type: "booked" | "blocked";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const inputUrl = typeof body?.iCalUrl === "string" ? body.iCalUrl : "";
    const envUrl = process.env.AIRBNB_ICAL_URL ?? "";
    const iCalUrl = (inputUrl || envUrl).trim();

    if (!iCalUrl) {
      return NextResponse.json(
        { error: "AIRBNB_ICAL_URL non configurata" },
        { status: 400 }
      );
    }

    const url = iCalUrl.replace(/^webcal:\/\//i, "https://");

    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; CalendarSync/1.0)" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`Fetch iCal fallito: HTTP ${res.status}`);

    const text = await res.text();
    if (!text.includes("BEGIN:VCALENDAR")) {
      throw new Error("Il link non è un file iCal valido");
    }

    const events = parseIcal(text);
    return NextResponse.json({ events, count: events.length });
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? "Sync failed" }, { status: 500 });
  }
}

function parseIcal(raw: string): ParsedEvent[] {
  const text = raw.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
  const lines = text.split(/\r\n|\n|\r/);

  const events: ParsedEvent[] = [];
  let cur: Partial<ParsedEvent> | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      cur = {};
      continue;
    }

    if (line === "END:VEVENT" && cur) {
      if (cur.start && cur.end) {
        events.push({
          uid: cur.uid ?? crypto.randomUUID(),
          summary: cur.summary ?? "",
          start: cur.start,
          end: cur.end,
          type: isBlockedSummary(cur.summary ?? "") ? "blocked" : "booked",
        });
      }
      cur = null;
      continue;
    }

    if (!cur) continue;

    const [prop, ...rest] = line.split(":");
    const value = rest.join(":");
    const propName = prop.split(";")[0].toUpperCase();

    if (propName === "DTSTART") cur.start = parseIcalDate(value);
    else if (propName === "DTEND") cur.end = parseIcalDate(value);
    else if (propName === "SUMMARY") cur.summary = value.trim();
    else if (propName === "UID") cur.uid = value.trim();
  }

  return events;
}

function parseIcalDate(s: string): string {
  const trimmed = s.trim();
  const y = trimmed.substring(0, 4);
  const m = trimmed.substring(4, 6);
  const d = trimmed.substring(6, 8);

  if (trimmed.length === 8) return `${y}-${m}-${d}T00:00:00.000Z`;

  const h = trimmed.substring(9, 11);
  const min = trimmed.substring(11, 13);
  const sec = trimmed.substring(13, 15);
  return `${y}-${m}-${d}T${h}:${min}:${sec}.000Z`;
}

function isBlockedSummary(s: string): boolean {
  const lower = s.toLowerCase();
  return (
    lower.includes("not available") ||
    lower.includes("blocked") ||
    lower.includes("bloccato") ||
    lower.includes("unavailable") ||
    lower === "airbnb (not available)"
  );
}

