import { NextResponse } from 'next/server';
import { addLead } from '@/lib/leads';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ ok: false, error: 'Corpo inválido.' }, { status: 400 });
  }

  const { nome, email, telefone, mensagem, consentimento } = body as {
    nome?: string;
    email?: string;
    telefone?: string;
    mensagem?: string;
    consentimento?: boolean;
  };

  if (!nome?.trim() || !email?.trim() || !mensagem?.trim()) {
    return NextResponse.json({ ok: false, error: 'Preencha nome, e-mail e mensagem.' }, { status: 400 });
  }

  if (!consentimento) {
    return NextResponse.json(
      { ok: false, error: 'É necessário concordar em receber contato.' },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: 'Informe um e-mail válido.' }, { status: 400 });
  }

  const lead = addLead({
    nome: nome.trim(),
    email: email.trim(),
    telefone: telefone?.trim(),
    mensagem: mensagem.trim(),
    consentimento: true,
  });

  return NextResponse.json({ ok: true, id: lead.id });
}
