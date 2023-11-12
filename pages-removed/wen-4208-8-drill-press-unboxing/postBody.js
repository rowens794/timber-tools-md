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
        {" "}
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} title={title} />
          <PostTitle title={title} />

          <p>
            In this post we are going to be unboxing the <InContentProductLink href="https://amzn.to/2r7RFxa" text="WEN 4208 8 inch Drill Press" />.
            This is a great entry level machine that is super easy to get setup and ready for work. Down below I'd like to provide some insight into
            why you might actually want to consider adding this tool to your shop.
          </p>

          <BuyButton productLink="https://amzn.to/2r7RFxa" />

          <h3>Five Uses of a Drill Press</h3>
          <h5>
            <strong>1. Cutting Mortises</strong>
          </h5>
          <p>
            You have a couple of options when your cutting a mortise: A mortising machine, which is expensive; a plunge router, which can be unruly
            for this purpose; or a drill press. If your on a limited budget a drill press is a great option.
          </p>
          <h5>
            <strong>2. Consistent Repeatable Cuts</strong>
          </h5>
          <p>
            Whether you are cutting holes for dowels or quickly pre-drilling a project a drill press enables you to produce holes that are at perfect
            90 degree angles at a consistent depth. Try installing dowels with just a hand drill and you'll quickly realize not only how difficult a
            perfect 90 degree angle is - but also how frustrating being off by 1 degree can be.
          </p>
          <h5>
            <strong>3. DIY Drum Sander</strong>
          </h5>
          <p>
            One of the more interesting uses is converting your drill press into a makeshift drum sander. Pick up something like{" "}
            <InContentProductLink href="https://amzn.to/2q7DIkx" text={`Peachtree's 3" x 6" sanding drum`} /> and all of the sudden your drill press
            is a drill pres
            <em>sander</em>.
          </p>
          <h5>
            <strong>4. Cutting Large Holes</strong>
          </h5>
          <p>
            If you need a 6 inch hole in a project, your options for getting it done are limited. Perhaps, you could use a jigsaw but no matter how
            steady handed you are your circle is not going to be perfect. I drill press + a{" "}
            <InContentProductLink href="https://amzn.to/2qZvNXC" text="$15 hole cutter attachment" /> makes cutting a perfect 6" hole quick and easy.
          </p>
          <h5>
            <strong>5. Accurate Angled Holes</strong>
          </h5>
          <p>
            While most projects don't call for an angled hole of any kind, when you need to cut them a drill press is a necessity. Some presses come
            with an adjustable table, but for those that don't{" "}
            <a href="http://www.woodworkersjournal.com/adjustable-angle-drilling-jig/" target="_blank">
              creating an angle jig{" "}
            </a>
            for a drill press is a simple enough task.
          </p>
          <h3>What's In the Video</h3>
          <p>
            See everything that I see as I unpack and assemble the WEN 4208. Putting the machine together was a simple task - start to finish was ~15
            minutes.
          </p>

          <YoutubeVideo videoId="V34JLV379_A" />

          <p>
            Check out the video above and if you like let me know on youtube. Click like or subscribe and I'll know to keep putting out similar
            videos.
          </p>
        </div>
      </article>
    </>
  );
}
