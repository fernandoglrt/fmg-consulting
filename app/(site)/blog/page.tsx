import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { BlogCard } from '@/components/BlogCard';
import { getAllPostsMeta } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos da FMG Consulting sobre estratégia, execução, gestão de pessoas e LGPD.',
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <PageHero
        image="/images/hero-blog.jpg"
        compact
        eyebrow="Conteúdo"
        title="Blog"
        subtitle="Reflexões sobre estratégia, execução e gestão de pessoas para o dia a dia da sua empresa."
      />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        {posts.length === 0 ? (
          <Reveal>
            <p className="text-ink/60">Em breve, novos artigos por aqui.</p>
          </Reveal>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <BlogCard post={post} priority={i === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
