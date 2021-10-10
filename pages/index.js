import Head from "next/head";
import Link from "next/link";
import { format, parseISO, add } from "date-fns";
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
    <div className="border border-black-200 rounded p-4 shadow">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-lg font-medium">{title}</a>
        </Link>
      </div>
      <div>{format(parseISO(date), "EE dd/MM/yyyy ", { locale: it })}</div>
      <div>{content}</div>
    </div>
  );
}
