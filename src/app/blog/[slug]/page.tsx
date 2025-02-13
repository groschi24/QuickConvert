import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDirectory);

  return files.map((fileName) => ({
    slug: fileName.replace(/.mdx$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), `src/content/blog/${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <article className="container relative mx-auto flex-grow px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-[#ffffffee]">
            {data.title}
          </h1>
          <div className="mb-8 flex items-center space-x-4 text-sm text-gray-600 dark:text-[#ffffff80]">
            <time dateTime={data.date}>
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{data.author}</span>
          </div>
          <div className="prose prose-lg prose-gray dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-headings:text-gray-900 dark:prose-headings:text-[#ffffffee] prose-a:text-indigo-600 hover:prose-a:text-indigo-500 dark:prose-a:text-indigo-400 dark:hover:prose-a:text-indigo-300 prose-strong:text-gray-900 dark:prose-strong:text-[#ffffffee] prose-code:text-gray-900 dark:prose-code:text-[#ffffffee] prose-pre:bg-gray-100 dark:prose-pre:bg-[#151515] prose-pre:text-gray-900 dark:prose-pre:text-[#ffffffee] prose-blockquote:text-gray-700 dark:prose-blockquote:text-[#ffffffaa] prose-blockquote:border-l-indigo-500 prose-li:text-gray-700 dark:prose-li:text-[#ffffffaa] prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-indigo-500 dark:prose-li:marker:text-indigo-400 max-w-none dark:text-[#ffffffcc]">
            <MDXRemote source={content} />
          </div>
        </div>
      </article>
    </div>
  );
}
