// src/pages/blog/[slug].tsx
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  // Separar frontMatter y contenido
  const parts = source.split('---\n');
  // parts = ["", "date: ...\ntitle: ...", "contenido MDX..."]
  const rawFM = parts[1];
  const content = parts.slice(2).join('---\n');

  const frontMatter = yaml.load(rawFM) as {
    title: string;
    date: string;
    type: string;
  };

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  };
};
