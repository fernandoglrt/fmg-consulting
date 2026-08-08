import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import type { PostMeta } from './postsClient';

export type { PostMeta } from './postsClient';
export { formatDate, localCover } from './postsClient';

const postsDir = path.join(process.cwd(), 'content/blog');

export type Post = PostMeta & { html: string };

function slugFromFile(filename: string) {
  return filename.replace(/\.md$/, '');
}

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? '');
}

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') && f !== '_index.md');
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(raw);
    return {
      slug: slugFromFile(file),
      title: data.title as string,
      autor: data.autor as string,
      data: toDateString(data.data),
      tempo_leitura: data.tempo_leitura as string,
      imagem_capa: data.imagem_capa as string,
      autoria_conteudo: data.autoria_conteudo as string | undefined,
    };
  });
  return posts.sort((a, b) => (a.data < b.data ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const processed = remark().use(remarkHtml).processSync(content);
  return {
    slug,
    title: data.title as string,
    autor: data.autor as string,
    data: toDateString(data.data),
    tempo_leitura: data.tempo_leitura as string,
    imagem_capa: data.imagem_capa as string,
    autoria_conteudo: data.autoria_conteudo as string | undefined,
    html: processed.toString(),
  };
}
