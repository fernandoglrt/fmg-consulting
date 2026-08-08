'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { PressLink } from '@/components/PressLink';
import { formatDate, type PostMeta } from '@/lib/postsClient';

export function PostsTable({ posts }: { posts: PostMeta[] }) {
  const router = useRouter();
  const [pending, setPending] = useState<string | null>(null);
  const reduced = useReducedMotion();

  async function handleDelete(slug: string) {
    if (!confirm(`Excluir o post "${slug}"? Essa ação não pode ser desfeita.`)) return;
    setPending(slug);
    await fetch(`/api/admin/posts/${slug}`, { method: 'DELETE' });
    setPending(null);
    router.refresh();
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center text-[14.5px] text-ink/50">
        Nenhum post ainda. Crie o primeiro em &ldquo;Novo post&rdquo;.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <table className="w-full text-left text-[14px]">
        <thead>
          <tr className="border-b border-line text-[12px] uppercase tracking-wide text-ink/40">
            <th className="px-5 py-3 font-medium">Título</th>
            <th className="px-5 py-3 font-medium">Autor</th>
            <th className="px-5 py-3 font-medium">Data</th>
            <th className="px-5 py-3 font-medium" />
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.slug} className="border-b border-line last:border-0">
              <td className="px-5 py-3.5 font-medium text-ink">{post.title}</td>
              <td className="px-5 py-3.5 text-ink/60">{post.autor}</td>
              <td className="px-5 py-3.5 text-ink/60">{formatDate(post.data)}</td>
              <td className="px-5 py-3.5">
                <div className="flex justify-end gap-4">
                  <PressLink href={`/admin/${post.slug}`} className="text-accent">
                    Editar
                  </PressLink>
                  <motion.button
                    onClick={() => handleDelete(post.slug)}
                    disabled={pending === post.slug}
                    whileTap={reduced ? undefined : { scale: 0.95 }}
                    className="text-red-600 disabled:opacity-40"
                  >
                    {pending === post.slug ? 'Excluindo…' : 'Excluir'}
                  </motion.button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
