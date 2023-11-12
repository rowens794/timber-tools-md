import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import Link from "next/link";

import stories from "../postComponents/postList";

export default function Index() {
  const heroPost = stories[0];
  const morePosts = stories.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <meta
            name="description"
            content="The place to get unbiased and entertaining information about woodworking and tools."
          />
          <title>Timber & Tools</title>
        </Head>
        <div style={{ maxWidth: "1140px", margin: "auto" }}>
          <Container>
            <Intro />
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
        </div>
      </Layout>
    </>
  );
}

function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
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

function PostPreview({ title, coverImage, date, excerpt, slug }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link legacyBehavior as={`/${slug}`} href="/[slug]">
          <a className="hover:underline" style={{ color: "black" }}>
            {title}
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
