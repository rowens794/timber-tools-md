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
      </Head>
      <article>
        <div className={styles.postContainer}>
          <HeroImage img={coverImage} />
          <PostTitle title={title} />

          <p>
            Portable Bandsaws are a uniquely flexible tool, able to cut metal, wood, and plastics while leaving a smooth work service. On top of that
            porta band saws are much easier to handle than reciprocating saws and allow you to get through your work with the least amount of effort.
            They are perfect for cutting awkward items like tubing quickly and cleanly.
          </p>
          <p>
            In this article, we're going to take a look at three of the most popular handheld bandsaws on the market and help you understand which one
            is right for you.
          </p>
          <h2>What to Look for in a Porta Band </h2>
          <p>There are a few key differentiators that you need to be on the lookout for when you're buying a portable bandsaw:</p>
          <p>
            <strong>Opening Size</strong>: You'll typically see saws with openings from 1.5" to 5.0" openings with a slightly lower cut capacity.
            While a larger opening obviously leads to more flexibility with the stock you cut, you have to consider that larger capacity saws will be
            both heavier and likely more expensive than smaller saws.
          </p>
          <p>
            <strong>Weight</strong>: These tools can vary in weight significantly from ~6lbs all the way up to 25+ lbs. Make sure you think through
            how you'll be using the saw or you may end up with rubber arms at the end of the day.
          </p>
          <p>
            <strong>Corded/Cordless</strong>: As with just about every other power tool on the market these days you'll need to make a decision about
            whether or not you want to pay for the increased flexibility offered by a cordless tool.
          </p>
          <p>
            <strong>Accessories</strong>: There are a number of saws on the market that are sold without blades and batteries. If you already have
            these, it's a great chance to pick up the tool at a lower cost. If you don't then you need to make sure you understand exactly what will
            be in the box when you open it.
          </p>
          <h2>The Saws We'll Look At</h2>
          <p>We're going to be looking at three highly-rated saws that cater to three specific use cases:</p>
          <p>
            First, the <InContentProductLink href="https://amzn.to/2oO9EIZ" text="Corded Milwaukee Portable Band Saw 6232" /> features a large cut
            capacity and eliminates the hassle of charging and changing batteries. This saw makes a lot of sense for users who need access to a saw
            that doesn't require portability.
          </p>
          <p>
            Second, we'll look at the much smaller - but much more portable,{" "}
            <InContentProductLink href="https://amzn.to/2M8Tink" text="Cordless Milwaukee Porta Band 2429" />. This saw is less than seven pounds and
            doesn't require a wall outlet. The trade-off is that the cut capacity is less than half of it's bigger brother.
          </p>
          <p>
            Finally, we'll dig into the <InContentProductLink href="https://amzn.to/2NmqeNP" text="Dewalt Cordless Deep Cut Portable Band Saw" />,
            which blends the best features of both the two Milwaukee Band Saws: large cut capacity and battery-powered operation.
          </p>
          <h2>
            <strong>Corded Milwaukee Portable Band Saw 6232</strong>
          </h2>
          <p>
            So let's dive into the saws. First, we'll be looking at the big daddy Milwaukee. This beast of machine clocks in at nearly 15 pounds. So
            if you're going to be using it for an extended period of time you will be building some muscle (although I will say, using this will still
            be easier than a hacksaw). The opening is among the widest that you'll find on any portable band saw at 5" wide by 5" deep.
          </p>

          <BuyButton productLink="https://amzn.to/2oO9EIZ" />

          <p>
            I've included a video of the saw in action down below, if you watch it you'll see that it cuts through 3 inch steel tubing in less than 40
            seconds. I'm primarily a woodworker, but if this saw can handle slicing up steel that quickly, I have no doubt that it can take care of
            rough cutting 4x4's when I need it.
          </p>

          <YoutubeVideo videoId="dPcRWV1DUIY" />

          <p>
            There are a couple of points about this saw that are worth mentioning. First and importantly, it doesn't come packaged with blades, you'll
            need to purchase them separately and they run ~$20.
          </p>
          <p>
            Second, the build quality is top-notch, if you check out the Amazon reviews, fully a 3rd of the reviews take the time to mention the
            quality. A lot of this has to do with what Milwaukee calls Job Site Armor™ Technology and the tools all metal direct drive system. The
            "Job Site Armor" is a composite casing for the tool and it provides crush resistance that you don't get in plastic-bodied equipment.
          </p>
          <p>
            Finally, if your looking for a saw that can also function as a standard mounted band saw then this might be the best bet for you. The{" "}
            <InContentProductLink href="https://amzn.to/2NpsvIf" text="SWAG Offroad V4.0 Portaband Table" /> is an extremely popular accessory that
            provides the necessary conversion.
          </p>
          <h2>
            <strong>Cordless Milwaukee Portable Band Saw 2429</strong>
          </h2>
          <p>
            If your looking for a band saw that emphasizes portability, then look no further than the Milwaukee 2429. This 6.5-pound porta band sports
            a battery that allows for maximum portability. It's ideal for cutting small tubing or rebar quickly while you're out in the field. What
            you gain in portability, you give up in material handling. The opening on the 2429 is only 1 5/8ths wide.
          </p>

          <BuyButton productLink="https://amzn.to/2M8Tink" />

          <p>
            I've included a video down below that shows the 2429 in use, you can see how easily it cuts through 2 pieces of rebar at the same time.
            Note how easily and cleanly the cuts are made. This product is primarily targeted towards electricians and plumbers, but anyone working
            with conduit or tubing would find this tool beneficial.
          </p>

          <YoutubeVideo videoId="8ZBRKTc6JZs" />

          <p>
            The Milwaukee 2429 runs significantly cheaper than the larger 6232 and in comes packaged with a blade, a case, a battery and a charger.
            Everything you need to get started using the tool is in the box.
          </p>
          <h2>
            <strong>Cordless Dewalt Portable Band Saw DCS374B</strong>
          </h2>
          <p>
            The last saw we'll look at is the Dewalt DCS374B. This saw combines the 5" cut capacity of the larger Milwaukee saw with the
            battery-powered operation of the 2429. While this porta band saw does feature the easy mobility you'd expect with a battery, it is heavy -
            weighing in at 14.5 pounds.
          </p>

          <BuyButton productLink="https://amzn.to/2NmqeNP" />

          <p>
            This saw features a variable speed trigger and an LED light to light-up the cutting area. As you'd expect with any Dewalt tool the build
            quality is top-notch. If you decide to purchase this saw keep in mind that it doesn't come with a blade or a battery. If you're already
            running 20 volt Dewalt tools that won't be a problem for you, but if you not it can be a meaningful jump up in price.
          </p>
          <p>
            I've found a video produced by Sparky Channel that shows the saw in action and you can see how well the saw performs. Sparky even
            demonstrates how to use the saw effectively on the job site without a vice.
          </p>

          <YoutubeVideo videoId="Bb1HuW-mxcY" />
        </div>
      </article>
    </>
  );
}
