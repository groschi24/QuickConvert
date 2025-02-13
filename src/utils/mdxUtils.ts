import { readFileSync, readdirSync } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { BlogPostMetadata } from "@/types/blog";

export async function getPostMetadata(
  filePath: string,
): Promise<BlogPostMetadata> {
  const source = readFileSync(filePath, "utf8");
  const { frontmatter } = await compileMDX<BlogPostMetadata>({
    source,
    options: { parseFrontmatter: true },
  });

  if (
    !frontmatter.title ||
    !frontmatter.date ||
    !frontmatter.author ||
    !frontmatter.description
  ) {
    throw new Error(`Invalid blog post metadata in ${path.basename(filePath)}`);
  }

  return frontmatter;
}

export async function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  const files = readdirSync(postsDirectory).filter((fileName: string) =>
    fileName.endsWith(".mdx"),
  );

  const posts = await Promise.all(
    files.map(async (fileName: string) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(postsDirectory, fileName);
      const metadata = await getPostMetadata(filePath);

      return {
        slug,
        ...metadata,
      };
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
