import { NextResponse } from 'next/server';
import { getDb } from '../../../db';
import { leads } from '../../../db/schema';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    if (typeof body.website === 'string' && body.website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? '').trim().slice(0, 120);
    const email = String(body.email ?? '').trim().toLowerCase().slice(0, 200);
    const company = String(body.company ?? '').trim().slice(0, 180);
    const stack = String(body.stack ?? '').trim().slice(0, 120);
    const problem = String(body.problem ?? '').trim().slice(0, 3000);
    const language = body.language === 'sv' ? 'sv' : 'en';

    if (!name || !company || !problem || !emailPattern.test(email)) {
      return NextResponse.json({ error: 'Invalid enquiry' }, { status: 400 });
    }

    await getDb().insert(leads).values({
      id: crypto.randomUUID(),
      name,
      email,
      company,
      stack: stack || null,
      problem,
      language,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Unable to save enquiry' }, { status: 500 });
  }
}
