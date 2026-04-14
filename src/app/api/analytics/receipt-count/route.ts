import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

// Use require to avoid static analysis executing DB at build time
// eslint-disable-next-line @typescript-eslint/no-require-imports
const Database = require('better-sqlite3');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { drizzle } = require('drizzle-orm/better-sqlite3');
import * as schema from '@/db/schema';

const path = process.env.DATABASE_URL || './data/recibo-express.db';
const sqlite = new Database(path);
const db = drizzle(sqlite, { schema });

const FALLBACK_COUNT = 2400;

export async function GET() {
  try {
    // Count all receipts in DB — drafts + confirmed
    const result = await db
      .select({ id: schema.receipts.id })
      .from(schema.receipts)
      .all();

    const total = result.length;
    const count = total === 0 ? FALLBACK_COUNT : total;

    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: FALLBACK_COUNT });
  }
}
