// src/pages/blog/index.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import matter from 'gray-matter';

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
);

export default BlogIndex;

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));

  const posts: PostItem[] = filenames.map((filename) => {
    const fullPath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title as string,
      date: data.date as string,
      type: data.type as string,
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return { props: { posts } };
};
