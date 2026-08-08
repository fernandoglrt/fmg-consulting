import { notFound } from 'next/navigation';
import { readPostRaw } from '@/lib/postsAdmin';
import { PostForm } from '@/components/admin/PostForm';

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const post = readPostRaw(params.slug);
  if (!post) notFound();

  return (
    <div>
      <h1 className="headline mb-6 text-2xl font-semibold text-ink">Editar post</h1>
      <PostForm mode="edit" initial={post} />
    </div>
  );
}
