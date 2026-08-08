import { getAllPostsMeta } from '@/lib/posts';
import { PostsTable } from '@/components/admin/PostsTable';
import { PressLink } from '@/components/PressLink';

export default function AdminPostsPage() {
  const posts = getAllPostsMeta();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="headline text-2xl font-semibold text-ink">Posts do blog</h1>
        <PressLink
          href="/admin/novo"
          className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-white"
        >
          Novo post
        </PressLink>
      </div>
      <PostsTable posts={posts} />
    </div>
  );
}
