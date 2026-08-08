import { PostForm } from '@/components/admin/PostForm';

export default function NovoPostPage() {
  return (
    <div>
      <h1 className="headline mb-6 text-2xl font-semibold text-ink">Novo post</h1>
      <PostForm mode="create" />
    </div>
  );
}
