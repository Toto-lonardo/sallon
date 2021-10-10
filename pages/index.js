import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import { blogPost } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="space-y-4">
          {blogPost.map((item) => (
            <BlogListItem key={item.slug} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-grey-100 rounded-md p-4 shadow hover:shadow-md transition duration-300 ease-in hover:border-gray-300">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-lg font-medium">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-sm">
        {format(parseISO(date), "EE dd/MM/yyyy ", { locale: it })}
      </div>
      <div>{content}</div>
    </div>
  );
}
