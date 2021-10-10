import Head from "next/head";
import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import { blogPost } from "../../lib/data";

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
