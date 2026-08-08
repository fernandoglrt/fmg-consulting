import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllPostsMeta, getPostBySlug, formatDate, localCover } from '@/lib/posts';
import { Reveal } from '@/components/Reveal';
import { PressLink } from '@/components/PressLink';
import { ReadingProgress } from '@/components/ReadingProgress';

export function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `${post.title} — por ${post.autor}, FMG Consulting.`,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <ReadingProgress />
      <section className="relative flex h-[56vh] min-h-[420px] items-end overflow-hidden bg-surface">
        <Image src={localCover(post.slug)} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1420]/92 via-[#0b1420]/45 to-[#0b1420]/10" />
        <div aria-hidden className="mesh-accent absolute inset-0 mix-blend-screen opacity-60" />
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-14 sm:px-8">
          <Reveal>
            <PressLink
              href="/blog"
              className="mb-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/60 hover:text-white"
            >
              <span aria-hidden>←</span> Blog
            </PressLink>
            <p className="eyebrow text-[13px] font-semibold uppercase text-accent-soft">
              {formatDate(post.data)} · {post.tempo_leitura}
            </p>
            <h1 className="display text-balance mt-3 text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold text-white">
              {post.title}
            </h1>
            <p className="mt-4 text-[15px] text-white/70">Por {post.autor}</p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="prose-fmg text-[17px]" dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.autoria_conteudo && (
            <p className="mt-10 border-t border-line pt-6 text-[13.5px] text-ink/50">
              {post.autoria_conteudo}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-14 border-t border-line pt-8">
            <PressLink
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-accent"
            >
              <span aria-hidden>←</span> Voltar para o blog
            </PressLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
