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

export default function index({ props }) {
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

          <BuyButton productLink="https://amzn.to/2x95GhA" />

          <h2>What Is A Brad Nailer?</h2>
          <p>
            A brad nailer is an <a href="https://en.wikipedia.org/wiki/Pneumatic_tool">air powered tool</a> that fastens materials with 'brads' hence
            the name. It's a tool that helps you put thin nails, or brads, into different types of materials. In a world full of different types of
            pneumatic nailers, brad nailers are one of the more popular.
          </p>
          <p>
            Since they all look the same and use similar nails, brad nailers are often put into the same category as finish nailers and nail guns.
            However, despite their similarity and category group, these tools are indeed different.
          </p>
          <h2>Brad Nailer Vs. Finish Nailer: Everything You Need To Know</h2>
          <p>
            Whether you are in the midst of a home improvement project or just want to inform yourself on a particular brad nailer model (or a finish
            nailer), knowing the difference between these two DIY tools is beneficial.
          </p>
          <p>
            I've come across a lot of topics on web forums around '
            <a href="http://www.doityourself.com/forum/electrical-power-machinery-ac-dc-hand-power-tools-sharpening/156604-brad-vs-finish-nailer.html">
              brad nailer vs. finish nailer
            </a>
            ' and '<a href="http://www.nailgundepot.com/blog/the-difference-between-brad-nails-vs-finish-nails.html">brad nail vs. finish nail</a>' -
            let's look at how you differentiate between these two tools and why you'd choose one over the other.
          </p>
          <h3>Brad Nail Vs. Finish Nail - Size And Gauge</h3>
          <p>
            The size of a brad is around 1.25 millimeters, just a bit bigger than the lead for a mechanical pencil. A finish nail is about 50% larger
            than a brad. The larger size increases the holding strength of a finish nail. This makes it ideal for applications that require strong
            joints. However, the size of a finish nail can also lead to workpiece damage when softer woods, such as pine, are used.
          </p>
          <p>
            Every brad nailer is designed to run 18 gauge fine wire brad nails. These tools are typically air powered and require an air compressor,
            to power a piston, to eject the brads into the workpiece. Because the brads have such a small diameter, they are nearly invisible when
            used.
          </p>
          <p>
            Finish nails are used for heavier trims, harder woods, and pieces that require more strength than a brad can offer. They run at 15 or 16
            gauge, which is a bit larger than brad nails. While the added strength these fasteners provide is a plus, there is a downside. In some
            applications, the larger finish nails can actually damage a workpiece because of its size.
          </p>
          <h3>Brad Nailer Uses</h3>
          <p>
            While finish nailers are exclusively used for 'finishing' jobs (as their name implies), brad nailers are used in many different
            applications. One of the most common is <a href="https://www.familyhandyman.com/skills/carpentry/trim-carpentry">trim carpentry</a>, where
            woodworkers use brad nailers to nail frames, trim, and mouldings. Brad nails have a large and flat head which does not make them the most
            visually appealing - however, a lot functional for many types of work and nailing out things that are out of sight.
          </p>
          <p>
            One of the most common brad nailer uses is temporarily adhering materials together. For example, a brad is strong enough to hold two
            pieces of wood together while gluing up. Because a brad has a head, once the glue has set, it can be removed from the workpiece.
          </p>
          <h2>So, Which Tool To Go For - Brad Nailer or Finish Nailer?</h2>
          <p>
            While having access to both a brad nailer and a finish nailer is the best solution, the brad nailer is the more versatile of the two
            tools. If you want something that you’re going to be able to lean on in most circumstances an 18 gauge brad nailer is your best bet.
          </p>
          <p>
            Regardless of whether you choose a brad or finish nailer, a big part of the investment you make will be in an air compressor. Down the
            line, you will be able to expand which pneumatic tools you pair with your compressor, and typically the tools are much less expensive than
            the compressor.
          </p>
        </div>
      </article>
    </>
  );
}
