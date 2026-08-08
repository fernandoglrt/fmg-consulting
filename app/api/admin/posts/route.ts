import { NextResponse } from 'next/server';
import { getAllPostsMeta } from '@/lib/posts';
import { createPost, postExists, slugify } from '@/lib/postsAdmin';

export async function GET() {
  return NextResponse.json({ ok: true, posts: getAllPostsMeta() });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ ok: false, error: 'Corpo inválido.' }, { status: 400 });

  const { title, autor, data, tempo_leitura, imagem_capa, autoria_conteudo, body: content, slug: slugInput } = body;

  if (!title?.trim() || !autor?.trim() || !data?.trim() || !content?.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Preencha ao menos título, autor, data e conteúdo.' },
      { status: 400 },
    );
  }

  let slug = slugify(slugInput?.trim() || title);
  if (!slug) return NextResponse.json({ ok: false, error: 'Slug inválido.' }, { status: 400 });

  let suffix = 2;
  const base = slug;
  while (postExists(slug)) {
    slug = `${base}-${suffix}`;
    suffix += 1;
  }

  createPost(slug, {
    title: title.trim(),
    autor: autor.trim(),
    data: data.trim(),
    tempo_leitura: tempo_leitura?.trim() || '',
    imagem_capa: imagem_capa?.trim() || '',
    autoria_conteudo: autoria_conteudo?.trim() || undefined,
    body: content,
  });

  return NextResponse.json({ ok: true, slug });
}
