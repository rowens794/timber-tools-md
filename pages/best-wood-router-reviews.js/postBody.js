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
          <HeroImage img={coverImage} />
          <PostTitle title={title} />
          <p>
            If you've come looking for the best wood router reviews of {new Date().getFullYear()}, you’re in the right place. Before we dive in, there
            are a couple of questions you need to ask yourself:
          </p>
          <ul>
            <li>How much power do I need?</li>
            <li>Is weight a factor?</li>
            <li>Do I want a fixed or plunge base?</li>
          </ul>
          <p>
            I'll help you address each of these questions and find the tool that'll fit your needs as we walk through the best wood router reviews for
            {new Date().getFullYear()}.
          </p>
          <h2>PORTER-CABLE 7518 Speedmatic 3 1/4 Horsepower</h2>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Porter-Cable-7518.jpg"
            alt="Porter-Cable 7518"
            title="Porter-Cable 7518"
          />
          <BuyButton productLink="https://amzn.to/2piJn3R" />
          <p>
            When you’re putting together a list of woodworking router reviews, it's impossible not to include this machine. The{" "}
            <InContentProductLink text="Porter-Cable 7518" href="https://amzn.to/2piJn3R" /> is a beast of a machine. It's 3 1/4 horsepower motor will
            guarantee that you'll swing any bit you need with ease. While the Porter-Cable brand doesn't always carry the best reputation, this router
            does. This is a professional quality machine.
          </p>
          <p>The 7518 has two important features:</p>
          <ul>
            <li>
              A 5-speed motor that ranges from 10k - 21k rpm. Slower speeds are absolutely essential for getting clean cuts with larger bits, and the
              ability to use large bits is the primary reason why you pay up for a 3 1/4 HP motor. (Wood Magazine has a great{" "}
              <a href="http://www.woodmagazine.com/woodworking-tips/techniques/routing/speed">about this.</a>)
            </li>
            <li>
              A soft start motor, which reduces torque as the motor initiates. This might seem like a small thing, but it will make handheld use of
              this hog much less intimidating.
            </li>
          </ul>
          Formatted HTML:
          <p>
            This is the most expensive router on this list, so it's important to understand why you would pay the extra money for it. The reason and
            the only reason is - the motor is massive at 3 1/4 horsepower. This machine will spin any bit you stick in it without a hiccup. While it
            is possible to use this router handheld, you will get the most out of it by sticking it under a table. (I took a look at my favorite
            tables <Link href="https://www.timberandtools.com/router-table-reviews">here</Link>)
          </p>
          <p>
            There are two downsides to this otherwise spectacular machine: First, it's expensive - it runs ~$350 new. Second, it's heavy, with a fixed
            base this machine weighs nearly 15lbs. Despite these two factors, the Porter-Cable 7518 has received a 4.3 of 5.0 stars review on Amazon
            with over 150 reviews.
          </p>
          <p>Swamp Creek Cabin does a pretty good video review of this router down below.</p>
          <h2>Bosch 1617EVSPK 2-1/4-Horsepower Plunge and Fixed Base Variable Speed Router</h2>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Bosch-Router.jpg"
            alt="Bosch 1617 Router"
            title="Bosch 1617 Router"
          />
          <BuyButton productLink="https://amzn.to/2oUhVwo" />
          <p>
            Once we take the initial step down in power from 3 1/4HP to 2 1/4HP, the best option available is the{" "}
            <InContentProductLink href="https://amzn.to/2oUhVwo" text="Bosch 1617" />. This package comes with both a fixed base and a plunge base. At
            2 1/4HP, this router will turn any bit you stick in it, but on some of the largest raised panel bits, you may notice a bit of hesitation.
            That being said, most people are spinning a 3 1/2" raised panel bit on the reg. For just about every other application this motor will
            perform flawlessly.
          </p>
          <p>
            ​An added benefit of this package is that the router comes with both a fixed base and a plunge base. The plunge base allows you to safely
            engage the bit in the middle of a workpiece. The Woodworkers Guild of America put together a fantastic video explaining how this works -
            check it out below.
          </p>
          <p>
            This router weighs in about 11lbs regardless of which base you are using, so it is reasonably comfortable to use handheld. Of course, the
            router performs well attached to a table as well. It is going to have a bit more difficulty swinging extremely large bits than the
            Porter-Cable, but you could get around that by taking a few more passes on the rare occasion that you are making a raised panel door.
          </p>
          <p>
            Overall, this is probably the most popular router in the country, Amazon alone sells about 1,300 of them a month. The owners love them
            too, the model has a 4.6 out of 5.0-star review.​
          </p>
          <p>
            Finally, (and importantly) keep in mind price. This model with both a fixed and plunge base goes for ~$190, nearly half of the price of
            the more powerful Porter-Cable.​
          </p>
          <h2>DEWALT DWP611PK 1.25 HP Compact Router</h2>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609559141/TimberTools/Dewalt-DWP611PK.jpg"
            alt="Dewalt DWP611PK"
            title="Dewalt DWP611PK"
          />
          <BuyButton productLink="https://amzn.to/2oWA4a9" />
          <p>
            For those whose needs are primarily handheld, you will be best served by a tool like the{" "}
            <InContentProductLink href="https://amzn.to/2oWA4a9" text="Dewalt DWP611PK 1 1/4 Horsepower Router" />. This is going to be your best bet
            for tasks such as:
          </p>
          <ul>
            <li>Rounding or chamfering edges</li>
            <li>Trimming veneer</li>
            <li>Etching designs</li>
            <li>Cutting inlays​</li>
          </ul>
          <p>
            At ~5lbs (5.5lbs with plunge base) you will be a lot more comfortable maneuvering this guy around than either of the two full-size options
            by hand. The lightweight will also enable more dexterity when doing fine motor tasks, such as cutting inlay cavities.
          </p>
          <p>
            You do lose some of the versatility of the Bosch router - you’re almost certainly not going to be sticking this small Dewalt under a
            router table. Even if you did manage to rig it to a table your definitely not going to be cutting raised panel doors with its 1 1/4
            horsepower motor. That's not why you buy this tool, you but it for the convenience of easily maneuvering a bit over a work surface by
            hand.
          </p>
          <p>
            The Dewalt provides that in spades. While the 1 1/4 motor isn't huge, it's adequate for the bits you would want to use by hand. Directly
            above the bit chuck, are two LED lights that illuminate the workpiece directly around the bit. ​It may seem like a novelty, but you won't
            think so as you spend 20 minutes staring through safety glasses at a poorly lit pencil tracing of the inlay your cutting.
          </p>
          <p>
            This router is universally loved, over 550 Amazon customers have rated this tool a 4.6 out of 5.0 and I would challenge you to find a
            review anywhere that doesn't highly recommend this handheld router.
          </p>
          <p>
            Reviews for this model are easy to find on YouTube, just type the model in. What isn't particularly easy to find is a clear description of
            why you'd want a handheld router, George Vondriska over at Woodworkers Guild of America put together a great demonstration in the video
            below.
          </p>
          <p>​</p>
          <h2>The Best Wood Router of {new Date().getFullYear()}</h2>
          <p>
            Saying there is 1 best router is meaningless. The potential uses for this tool are so varied that you have to choose the best tool for
            your needs. Once you know why you would choose one class of router over another, the battle is nearly over. Above, the top choices for
            each type are identified.
          </p>
          <p>​It comes down to the following:</p>
          <ul>
            <li>If you know you are going to be mounting your router under a table and turning large, heavy bits, then get the Porter-Cable.</li>
            <li>If the work you plan on doing is primarily trim or handheld, the Dewalt is a no-brainer.</li>
            <li>If you'll be doing a mixture of table and handheld, or even if you’re not entirely sure, get the Bosch.</li>
          </ul>
        </div>
      </article>
    </>
  );
}
