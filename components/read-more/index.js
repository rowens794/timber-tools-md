import Link from "next/link";
import styles from "./readMore.module.css";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className={styles.container}>
        <h2 className="mb-8 text-4xl md:text-4xl font-bold tracking-tighter leading-tight">More Stories</h2>
        {posts.map((post) => (
          <Post
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

const Post = (data) => {
  return (
    <div className={styles.linkContainer}>
      <Link href={`/${data.slug}`}>
        <a className={styles.title}>{data.title}</a>
      </Link>
    </div>
  );
};
