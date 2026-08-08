import type { MetadataRoute } from 'next';
import { getAllPostsMeta } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fmgcons.com.br';
  const staticPages = [
    '',
    '/sobre',
    '/servicos',
    '/clientes',
    '/lgpd',
    '/passos-lgpd',
    '/blog',
    '/contato',
    '/politica-de-privacidade',
  ].map((slug) => ({
    url: `${base}${slug}`,
    lastModified: new Date(),
  }));

  const posts = getAllPostsMeta().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.data),
  }));

  return [...staticPages, ...posts];
}
