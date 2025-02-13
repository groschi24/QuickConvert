import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { BlogPostMetadata } from "@/types/blog";

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
  const { content, frontmatter } = await compileMDX<BlogPostMetadata>({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <article className="container relative mx-auto flex-grow px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-[#ffffffee]">
            {frontmatter.title}
          </h1>
          <div className="mb-8 flex items-center space-x-4 text-sm text-gray-600 dark:text-[#ffffff80]">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{frontmatter.author}</span>
          </div>
          <div className="prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-blockquote:border-l-indigo-500 prose-blockquote:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-900 prose-pre:bg-gray-100 prose-pre:text-gray-900 prose-ol:list-decimal prose-ul:list-disc prose-li:text-gray-700 prose-li:marker:text-indigo-500 dark:text-[#ffffffcc] dark:prose-headings:text-[#ffffffee] dark:prose-a:text-indigo-400 dark:hover:prose-a:text-indigo-300 dark:prose-blockquote:text-[#ffffffaa] dark:prose-strong:text-[#ffffffee] dark:prose-code:text-[#ffffffee] dark:prose-pre:bg-[#151515] dark:prose-pre:text-[#ffffffee] dark:prose-li:text-[#ffffffaa] dark:prose-li:marker:text-indigo-400">
            {content}
          </div>
        </div>
      </article>
    </div>
  );
}
