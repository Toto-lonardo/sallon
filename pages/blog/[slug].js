import Head from "next/head";
import { blogPost } from "../../lib/data";

export default function BlogPage({ title, date, content }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <div>{content}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("hi!", context);
  const { params } = context;
  return {
    props: blogPost.find((item) => item.slug === params.slug), // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPost.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
