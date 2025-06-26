// src/pages/blog/[slug].tsx
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface BlogPostProps {
  source: any;
  frontMatter: {
    title: string;
    date: string;
    type: string;
    description?: string;
  };
}

const BlogPost: NextPage<BlogPostProps> = ({ source, frontMatter }) => {
  const { title, date, description } = frontMatter;

  return (
    <>
      <Head>
        <title>{title} | FLOWgenio Blog</title>
        <meta name="description" content={description || `${title} – FLOWgenio SaaS`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description || `${title} – FLOWgenio`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://flowgenio.com/blog/${encodeURIComponent(title)}`} />
      </Head>

      <article className="prose lg:prose-xl mx-auto py-16">
        <h1>{title}</h1>
        <p className="text-sm text-gray-500">{date}</p>
        <MDXRemote {...source} />
      </article>
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        title: data.title,
        date: data.date,
        type: data.type,
        description: data.description || '',
      },
    },
  };
};
