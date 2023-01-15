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

export default function index({
  props = { title: null, coverImage: null, excerpt: null },
}) {
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
          <p>
            Folks, let's talk about a tool that's gonna make your drilling life
            a whole lot easier: the Milescraft 1318 DrillMate.
          </p>

          <p>
            This handy attachment is a game-changer when it comes to drilling
            perpendicular holes. Whether you're a woodworker, metalworker, or
            just someone who likes to fix things around the house, this tool is
            a must-have.
          </p>

          <BuyButton productLink="https://amzn.to/3iLGedX" />

          <p>
            Now, I know what you're thinking, 'Nick, I can drill straight holes
            just fine on my own, thank you very much.' But hear me out. The
            DrillMate has a built-in bubble level and a big ol' protractor scale
            that makes lining up the attachment with your workpiece a breeze.
            And once it's set, you can trust that your holes are gonna be
            dead-on perpendicular.
          </p>

          <p>
            But that's not all. The DrillMate also comes with a depth stop and a
            locking collar, which makes it easy to use and keeps it secure. And
            the best part? It can be used on a variety of materials, from wood
            to metal to plastic. So whether you're building a wooden bookshelf
            or installing new hardware on a metal cabinet, the DrillMate has got
            you covered.
          </p>

          <p>
            In this article, we're going to take a closer look at the features
            and benefits of the Milescraft 1318 DrillMate, and see how it stacks
            up against the competition. So, grab your drill and let's get
            started.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1673755105/TimberTools/full-product.jpg"
            alt="Milescraft 1318 DrillMate"
            title="Milescraft 1318 DrillMate"
          />

          <h2>Features</h2>
          <p>
            Let's dive into the nitty-gritty of the Milescraft 1318 DrillMate.
            This handy attachment is packed with features that make it a
            must-have for any workshop.
          </p>

          <p>
            First of all, let's talk about the precision alignment system. This
            baby comes with a built-in bubble level and a big ol' protractor
            scale, so you can line it up just right with your work piece. And
            once you've got it set, you can trust that your holes are gonna be
            dead-on perpendicular. That's right, no more crooked holes that make
            you wanna pull your hair out.
          </p>

          <p>
            Next up, we've got the depth stop. This feature allows you to set
            the depth of your hole, so you don't have to worry about drilling
            too deep and ruining your workpiece. And the locking collar keeps
            the attachment securely in place, so you can focus on drilling
            without having to worry about it moving around.
          </p>
          <p>
            But that's not all. The DrillMate is also versatile. It can be used
            on a variety of materials, from wood to metal to plastic. So whether
            you're building a wooden bookshelf or installing new hardware on a
            metal cabinet, the DrillMate has got you covered. And it's
            compatible with just about any drill, so you can attach what you've
            got and get to work.
          </p>
          <p>
            In short, the Milescraft 1318 DrillMate is packed with features that
            make it a must-have for any workshop. It's easy to use, precise, and
            versatile, and can save you a lot of time and effort.
          </p>

          <h2>Tool Versatility</h2>
          <p>
            Perhaps the best thing about the Milescraft 1318 DrillMate is its
            versatility. This handy attachment can be used on just about
            anything, making it a great tool for a wide range of projects.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1673755105/TimberTools/on-stone.jpg"
            alt="Milescraft 1318 DrillMate"
            title="Milescraft 1318 DrillMate"
          />
          <p>
            Let's start with woodworking. If you're building a wooden bookshelf,
            a birdhouse, or any other project that requires precisely drilled
            holes, the DrillMate will make your life a whole lot easier. It's
            easy to align and ensures that your holes will be dead-on straight,
            so you don't have to worry about crooked shelves or uneven
            birdhouses.
          </p>

          <p>
            But the DrillMate isn't just for woodworking. It's also great for
            metalworking. If you're installing new hardware on a metal cabinet
            or making a metal sculpture, the DrillMate will make the process a
            lot smoother. It's compatible with most drill presses, so you can
            attach it to your existing drill and get to work.
          </p>
          <p>
            In short, the Milescraft 1318 DrillMate is a versatile tool that can
            make a great addition to any workshop. Its precision and versatility
            make it a great option for a wide range of projects, from
            woodworking and metalworking to home repairs and more.
          </p>

          <h2>Pros and Cons</h2>
          <p>
            Let's talk about the good, the bad, and the ugly of the Milescraft
            1318 DrillMate. As with any tool, there are going to be some pros
            and cons.
          </p>
          <p>
            First, let's start with the good. The DrillMate's precision
            alignment system is top-notch. The built-in bubble level and
            protractor scale make it easy to align the attachment with your
            workpiece, ensuring that your holes will be dead-on perpendicular.
            The depth stop and locking collar are also great features that make
            the tool easy to use and secure.
          </p>
          <p>
            However, there are also some downsides to the DrillMate. Some users
            have reported that the depth stop can be difficult to use and the
            spring can be annoying. Additionally, the tool can be bulky, making
            it less convenient for some projects.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1673755105/TimberTools/pvc-usage.jpg"
            alt="Milescraft 1318 DrillMate"
            title="Milescraft 1318 DrillMate"
          />

          <h2>What Others Say</h2>
          <p>
            In addition to its features and benefits, the Milescraft 1318
            DrillMate has received positive reviews from users. Many users have
            reported that the tool is easy to use, precise, and versatile,
            making it a great addition to any workshop. However, some users have
            reported that the tool can be difficult to use and the spring can be
            annoying.
          </p>

          <h2> Conclusion </h2>
          <p>
            Overall, the Milescraft 1318 DrillMate is a great tool that can make
            a big difference in your drilling projects. It's packed with
            features that make it easy to use, precise, and versatile, making it
            a great addition to any workshop. While there are some downsides to
            the tool, such as the depth stop and spring, overall it has received
            positive reviews from users. So, if you're looking for a tool to
            help you drill straight and perpendicular holes, the Milescraft 1318
            DrillMate is definitely worth checking out.
          </p>

          <BuyButton productLink="https://amzn.to/3iLGedX" />
        </div>
      </article>
    </>
  );
}
