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

          <h2>Routing Decorative Mouldings​</h2>
          <p>
            When your running a few hundred feet of wood past a bit, getting consistent results without a table is almost impossible. Sure, you could
            rely on the bit's bearing to help you maintain firm contact with the work piece, but not expecting to encounter a knot or a slight wobble
            of the router's base over multiple fullsize boards is unrealistic.
          </p>
          <h2>Building Raised Panel Doors</h2>
          <p>
            Working with large bits that require multiple passes is about as close as it comes to absolutely requiring a router table. Not only will
            you need to make multiple passes, but precision is important because you will have to fit pieces together that were routed separately.
          </p>
          <p>
            A table allows you to make perfect passes each time supported by both the table top and the fence. Additionally, making precise height
            adjustments is far easier in a table, especially one that is fitted with a{" "}
            <Link href="/ultimate-router-lift-buying-guide">
              <a>router lift</a>
            </Link>
            .​
          </p>

          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Raised-Panel-Bits.jpg"
            alt="Raised Panel Bits"
            title="Raised Panel Bits"
          />
          <h2>Small/Narrow Work Pieces</h2>
          <p>
            Every once in a while we will find ourselves working with a piece that is either too small or too narrow to safely rest the base of the
            router on. Without the ability to take the workpiece to the tool, your options in this scenario are limited. Ultimately, if you don't have
            access to a table, you will be forced to change the design of your project or risk injury.
          </p>
          <h2>​Cutting Dovetails</h2>
          <p>
            There are a number of ways to cut dovetails, but one of the easiest is with a dovetailing bit on a router. The problem is, this method
            will only work if you have a router table. Check out the video below of how this works.
          </p>
          <p>
            While it is conceivable that you could rig up some way to get these joints cut without a table, the effort that would go into simply
            setting up the cut would make you question why you would attempt it without a table. On a side note the folks that produced this video
            over at Wood Workers Journal have a ton of great resources on their website: of particular note for this post is their article on creating
            a router table attachment for your table saw. You can find that post{" "}
            <a href="http://www.woodworkersjournal.com/make-router-table-extension-table-saw/" target="_blank">
              here
            </a>
            .
          </p>
          <h2>A New World of Jigs</h2>
          <p>
            The T track that comes standard on nearly all router tables opens up the potential for a wide variety of jigs to be paired with you table.
            The most obvious would be a simple crosscut jig that allows quick, repeatable, and safe cuts. But the options really do become endless. To
            get your brain turning check out{" "}
            <a href="http://www.finewoodworking.com/2008/07/28/five-essential-router-table-jigs-in-action" target="_blank">
              these five jigs
            </a>
            , from Fine Woodworking.
          </p>
          <h2>There you have it</h2>
          <p>
            Again, a table is most certainly not a requirement to get good work done. What a router table does is it simplifies the most common tasks
            we execute with our routers. It ensures the results that we get are more consistent and that we are safer in executing cuts. For me at
            least, inconsistent results and less than perfectly safe cuts are two items that absolutely destroy the fun of woodworking. For those
            reasons alone, a router table is a must for my workshop.
          </p>
          <p>
            Check out my favorite{" "}
            <Link href="/router-table-reviews">
              <a>Router Tables​ here</a>
            </Link>{" "}
            , of course, if your up to it building a router table yourself is certainly a do-able project.
          </p>
          <p>An if you just want to see our favorite, check out the Bosch RA1171.</p>

          <BuyButton productLink="https://amzn.to/2nYBdxg" />
        </div>
      </article>
    </>
  );
}
