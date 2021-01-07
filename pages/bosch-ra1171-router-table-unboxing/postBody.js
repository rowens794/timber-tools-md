import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../../postComponents/postStyles.module.css";
import HeroImage from "../../postComponents/heroImage";
import PostTitle from "../../postComponents/postTitle";
import ProductImage from "../../postComponents/productImg";
import BuyButton from "../../postComponents/buyButton";
import InContentProductLink from "../../postComponents/inContentProductLink";
import YoutubeVideo from "../../postComponents/youtubeVideo";

export default function index({ props = { title: null, coverImage: null, excerpt: null } }) {
  let { title, coverImage, excerpt } = props;

  return (
    <>
      <Head>
        <meta name="description" content={excerpt} />
        <title>{title}</title>
      </Head>
      <article>
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} title={title} />
          <PostTitle title={title} />

          <p>I opened my door this morning to find a package from Amazon. Imagine my delight when I found the Bosch RA1171 Router Table inside.</p>
          <p>In this post we are going to open up the table, put it together and I'll let you know what I think.</p>
          <p>
            If you read TimberAndTools.com often, you'll know that I am a big fan of the{" "}
            <Link href="https://www.timberandtools.com/why-you-need-a-router-table/">
              <a>added functionality a router table provides</a>
            </Link>
            . For the longest time, I hung my router upside down from a piece of oak on my table saw. This was workable, but I was tired of battling
            my 2"x4" fence system (referring to it as a fence system is the overstatement of the century) and I really wanted a miter slot so that I
            could introduce both feather boards and jigs into my routing arsenal.
          </p>
          <h3>Why I Chose the Bosch Cabinet Style Router Table</h3>
          <p>
            My decision was based on 3 constraints. First, my shop space is tiny. I have about 250 square feet of space in my basement, so a
            standalone table was out of the question. Second, dust is a huge issue for me. ​I wanted something with a cabinet to contain as much dust
            as possible. Finally, my budget is limited. I had at most $200 to spend.
          </p>
          <p>
            Not long ago, back when I was daydreaming about a new router table, I wrote a{" "}
            <Link href="https://www.timberandtools.com/router-table-reviews/">
              <a>post that documented the research I was doing to find the right table for myself</a>
            </Link>
            . From that work, I knew I would be deciding between two options: The Bosch RA1171 or the Benchdog Pro Top. The Benchdog was enticing but
            ultimately I couldn't justify stretching above the $200 I had to spend, especially when the Bosch RA1171 was available for half the price.
            One additional factor that did come into play was the fact that the Bosch router table had a dust collection port in the cabinet, again
            dust is a HUGE deal for me.
          </p>
          <h3>What's In the Video</h3>
          <p>
            In the video above I show you exactly what comes in the RA1171 box and how to assemble it. I sped up the video during assembly, so it is a
            bit difficult to tell how long it actually took me. ​In total, I had between 30-45 minutes invested in getting the thing screwed together.
            It was extremely easy to put together. If you put a piece of it together incorrectly, you will know immediately - in fact, Bosch
            engineered the assembly to self-identify mistakes.
          </p>
          <p>
            Check out the video above and if you like let me know on youtube. Click like or subscribe and I'll know to keep putting out similar
            videos.
          </p>
          <YoutubeVideo videoId="GvPt_jYfFZE" />
          <BuyButton productLink="https://amzn.to/2x95GhA" />
        </div>
      </article>
    </>
  );
}
