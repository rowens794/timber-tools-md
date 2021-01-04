import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");
const htmlPostsDirectory = join(process.cwd(), "htmlPosts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

export function getHtmlPostSlugs() {
  return fs.readdirSync(htmlPostsDirectory);
}

export function getHtmlPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.js$/, "");
  const fullPath = join(htmlPostsDirectory, `${realSlug}.js`);
  console.log(fullPath);
  return fullPath;
}

export function getAllHtmlPosts(fields = []) {
  const slugs = getHtmlPostSlugs();
  const posts = slugs
    .map((slug) => getHtmlPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}
