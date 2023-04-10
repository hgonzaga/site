import getPostMetadata from '@/components/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(
  props: any
): Promise<Metadata | undefined> {
  const posts = getPostMetadata();
  const post = posts.find((post) => post.slug === props.slug);
  if (!post) {
    return;
  }

  const { title, subtitle: description, date: publishedTime, slug } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://hgonzaga.com/blog/${slug}`,
    },
  };
}

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <section>
      <h1 className="font-bold text-3xl font-condensed mb-5">
        {post.data.title}
      </h1>
      <h2 className="mb-5">{post.data.subtitle}</h2>

      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-condensed text-sm max-w-2xl">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.data.date}
        </div>
        <div className="h-1 bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>

      <article className="prose dark:prose-invert lg:prose-base prose-neutral">
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  );
};

export default PostPage;
