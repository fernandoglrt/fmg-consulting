import { NextResponse } from 'next/server';
import { deletePost, readPostRaw, updatePost } from '@/lib/postsAdmin';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const post = readPostRaw(params.slug);
  if (!post) return NextResponse.json({ ok: false, error: 'Post não encontrado.' }, { status: 404 });
  return NextResponse.json({ ok: true, post });
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: 'Corpo inválido.' }, { status: 400 });

  const { title, autor, data, tempo_leitura, imagem_capa, autoria_conteudo, body: content } = body;

  if (!title?.trim() || !autor?.trim() || !data?.trim() || !content?.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Preencha ao menos título, autor, data e conteúdo.' },
      { status: 400 },
    );
  }

  try {
    updatePost(params.slug, {
      title: title.trim(),
      autor: autor.trim(),
      data: data.trim(),
      tempo_leitura: tempo_leitura?.trim() || '',
      imagem_capa: imagem_capa?.trim() || '',
      autoria_conteudo: autoria_conteudo?.trim() || undefined,
      body: content,
    });
  } catch {
    return NextResponse.json({ ok: false, error: 'Post não encontrado.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: { slug: string } }) {
  deletePost(params.slug);
  return NextResponse.json({ ok: true });
}
