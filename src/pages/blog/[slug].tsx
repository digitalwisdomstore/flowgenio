// src/pages/blog/[slug].tsx
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';

interface BlogPostProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    type: string;
  };
}

const BlogPost: NextPage<BlogPostProps> = ({ source, frontMatter }) => (
  <article className="prose lg:prose-xl mx-auto py-16">
    <h1>{frontMatter.title}</h1>
    <p className="text-sm text-gray-500">{frontMatter.date}</p>
    <MDXRemote {...source} />
  </article>
);

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  const paths = files
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => ({
      params: { slug: filename.replace(/\.mdx$/, '') },
    }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // matter separa frontMatter y contenido
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        title: data.title as string,
        date: data.date as string,
        type: data.type as string,
      },
    },
  };
};
