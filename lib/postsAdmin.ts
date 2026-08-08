import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/blog');

export type PostInput = {
  title: string;
  autor: string;
  data: string;
  tempo_leitura: string;
  imagem_capa: string;
  autoria_conteudo?: string;
  body: string;
};

const COMBINING_MARKS = /[̀-ͯ]/g;

export function slugify(input: string) {
  return input
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? '');
}

function filePath(slug: string) {
  return path.join(postsDir, `${slug}.md`);
}

export function postExists(slug: string) {
  return fs.existsSync(filePath(slug));
}

function serialize(input: PostInput) {
  const frontmatter: Record<string, string> = {
    title: input.title,
    autor: input.autor,
    data: input.data,
    tempo_leitura: input.tempo_leitura,
    imagem_capa: input.imagem_capa,
  };
  if (input.autoria_conteudo) frontmatter.autoria_conteudo = input.autoria_conteudo;

  return matter.stringify(input.body.trim() + '\n', frontmatter);
}

export function createPost(slug: string, input: PostInput) {
  fs.mkdirSync(postsDir, { recursive: true });
  fs.writeFileSync(filePath(slug), serialize(input), 'utf8');
}

export function updatePost(slug: string, input: PostInput) {
  if (!postExists(slug)) throw new Error('Post não encontrado.');
  fs.writeFileSync(filePath(slug), serialize(input), 'utf8');
}

export function deletePost(slug: string) {
  if (!postExists(slug)) return;
  fs.unlinkSync(filePath(slug));
}

export function readPostRaw(slug: string): (PostInput & { slug: string }) | null {
  const p = filePath(slug);
  if (!fs.existsSync(p)) return null;
  const raw = fs.readFileSync(p, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? '',
    autor: data.autor ?? '',
    data: toDateString(data.data),
    tempo_leitura: data.tempo_leitura ?? '',
    imagem_capa: data.imagem_capa ?? '',
    autoria_conteudo: data.autoria_conteudo,
    body: content.trim(),
  };
}
