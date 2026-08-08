import { NextResponse } from 'next/server';
import { getLeads } from '@/lib/leads';

export async function GET() {
  return NextResponse.json({ ok: true, leads: getLeads() });
}
