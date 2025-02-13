import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        description: data.description,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative mx-auto flex-grow px-4 py-16">
        <h1 className="mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          Blog
        </h1>
        <div className="mx-auto max-w-4xl space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]"
            >
              <article>
                <h2 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffee] dark:group-hover:text-indigo-400">
                  {post.title}
                </h2>
                <div className="mb-4 flex items-center space-x-4 text-sm text-gray-600 dark:text-[#ffffff80]">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <p className="text-gray-600 dark:text-[#ffffffaa]">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
