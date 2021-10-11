import Head from "next/head";
import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getAllPosts } from "../../lib/data";
import markcontent from "../../components/markcontent";

export default function BlogPage({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4 border-opacity-50 ">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="text-gray-600 text-md mt-1">
            {format(parseISO(date), "EE dd/MM/yyyy ", { locale: it })}
          </div>
        </div>
        <div className="prose">
          <MDXRemote {...content} components={markcontent} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await serialize(content);
  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
