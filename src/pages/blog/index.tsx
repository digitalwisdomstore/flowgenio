// src/pages/blog/index.tsx
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';

interface PostItem {
  slug: string;
  title: string;
  date: string;
  type: string;
}

interface BlogIndexProps {
  posts: PostItem[];
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => (
  <>
    <Head>
      <title>Blog | FLOWgenio SaaS</title>
      <meta name="description" content="Explora nuestros artículos, tutoriales y newsletters para influencers y emprendedores en LATAM." />
      <meta property="og:title" content="Blog | FLOWgenio SaaS" />
      <meta property="og:description" content="Explora contenido para influencers y emprendedores LATAM." />
      <meta property="og:url" content="https://flowgenio.com/blog" />
    </Head>

    <div className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {post.date} — {post.type}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default BlogIndex;

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));

  const posts: PostItem[] = files.map((filename) => {
    const raw = fs.readFileSync(path.join(blogDir, filename), 'utf8');
    const { data } = matter(raw);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      type: data.type,
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return { props: { posts } };
};
