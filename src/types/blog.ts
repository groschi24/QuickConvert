/**
 * Represents the metadata for a blog post
 */
export interface BlogPostMetadata {
  /** The title of the blog post */
  title: string;
  /** The publication date of the blog post */
  date: string;
  /** The author of the blog post */
  author: string;
  /** A brief description of the blog post content */
  description: string;
}

/**
 * Represents a blog post with its metadata and slug
 */
export interface BlogPost extends BlogPostMetadata {
  /** The URL-friendly slug for the blog post */
  slug: string;
}
