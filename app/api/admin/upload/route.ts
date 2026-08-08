import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public/images');

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const file = form?.get('file');

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ ok: false, error: 'Nenhum arquivo enviado.' }, { status: 400 });
  }

  if (!file.type.startsWith('image/')) {
    return NextResponse.json({ ok: false, error: 'Envie um arquivo de imagem.' }, { status: 400 });
  }

  const ext = path.extname(file.name) || '.jpg';
  const safeBase = path
    .basename(file.name, ext)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60) || 'upload';
  const filename = `${safeBase}-${Date.now()}${ext}`;

  fs.mkdirSync(uploadDir, { recursive: true });
  const bytes = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(path.join(uploadDir, filename), bytes);

  return NextResponse.json({ ok: true, path: `/images/${filename}` });
}
