import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A space for my thoughts on it world, and more.',
};

const BlogPage = () => {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <section>
      <h1 className="text-3xl font-condensed mb-5">Blog</h1>
      <div className="grid grid-cols-1 gap-4">{postPreview}</div>
    </section>
  );
};

export default BlogPage;
