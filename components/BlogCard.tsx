'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { PressLink } from './PressLink';
import { formatDate, localCover, type PostMeta } from '@/lib/postsClient';

export function BlogCard({ post, priority }: { post: PostMeta; priority?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <PressLink href={`/blog/${post.slug}`} className="group block">
      <motion.article
        whileHover={reduced ? undefined : { y: -5 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-shadow duration-300 hover:shadow-lifted"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={localCover(post.slug)}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-[12.5px] font-medium uppercase tracking-wide text-accent">
            {formatDate(post.data)} · {post.tempo_leitura}
          </p>
          <h3 className="headline mt-2.5 text-[19px] font-semibold text-ink">{post.title}</h3>
          <p className="mt-3 text-[14px] text-ink/55">Por {post.autor}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Ler artigo <span aria-hidden>→</span>
          </span>
        </div>
      </motion.article>
    </PressLink>
  );
}
