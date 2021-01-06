import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import styles from "../../postComponents/postStyles.module.css";
import HeroImage from "../../postComponents/heroImage";
import PostTitle from "../../postComponents/postTitle";
import ProductImage from "../../postComponents/productImg";
import BuyButton from "../../postComponents/buyButton";
import InContentProductLink from "../../postComponents/inContentProductLink";
import YoutubeVideo from "../../postComponents/youtubeVideo";
import helpers from "../../postComponents/helpers";

export default function tableSawBuyingGuide() {
  const router = useRouter();
  let { title, coverImage, excerpt } = helpers.getTitleAndHero(router.pathname);

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

          <h2>Who Needs a Bosch RA1171?</h2>
          <p>
            Let's begin with who this table is built for. This is a table targeted at serious hobbyist woodworkers. You're going to get great build
            quality and a table you can rely on at a reasonable price. What you're not going to get is all-metal construction, a huge work surface, or
            a table you would be happy standing in front 8 hours a day for 250 days a year.
          </p>
          <p>
            The reason you wouldn't be happy if you were using this Bosch router table professionally has nothing to do with the quality of the work
            it produces. It has to do with some relatively minor inconveniences that you have to put up with when you're setting up cuts and running a
            workpiece past the bit.
          </p>
          <p>
            As a hobbyist woodworker (presumably one on a budget) you need to decide on whether or not you are willing to put up with some
            inconvenience in order to avoid paying 2 to 5 times as much on a professional table.
          </p>
          <h2>What this Bosch Router Table Does Well</h2>
          <h3>Cabinet Housing Keeps Down Dust</h3>
          <p>
            Topping the list of reasons I decided to purchase the Bosch RA1171 was the enclosed cabinet. I work in a smaller shop and dealing with
            heaps of sawdust really cuts into my efficiency. I knew that I wanted a router table that could cut down on as much dust as possible. The
            RA1171 does exactly that.
          </p>
          <p>
            The cabinet is fairly large and while it definitely collects dust, it absolutely contains dust that would otherwise end up on the floor of
            my shop. It features 2 dust collection ports, one directly behind the router bit, at the source of the dust, and a second lower in the
            outer cabinet to cut down on the dust that makes it inside.
          </p>
          <p>
            I have never connected a vac hose to the cabinet port and have never had a problem with either dust escaping from the cabinet or too much
            dust building up in the cabinet. My process is to simply spend 20 seconds after I am done using the table to vac out the inside of the
            cabinet.
          </p>
          <h3>Solid Construction</h3>
          <p>
            The router table is almost entirely constructed out of laminated MDF, not the less expensive particle board you might expect to see in a
            table at this price point. Once the table is assembled it feels extremely solid, there is no wiggle in it at all.
          </p>
          <p>
            While the surface of the router table is mostly MDF, it's important to note that the router plate - where your router will actually be
            attached to the table - is cast aluminum. This is an important feature because while I do expect the MDF that the Cabinet is constructed
            from to hold up for years, I don't think that MDF would have been able to support the weight and vibration of a router motor. The fact
            that it is cast aluminum solves that issue and adds significantly to the longevity of the table.
          </p>
          <h3>Great Fence</h3>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Bosch-RA1171-Fence.jpg"
            alt="Bosch RA1171 Fence"
            title="Bosch RA1171 Fence"
          />

          <p>
            The fence system consists of two separate MDF panels that are connected on an aluminum rail to keep the two pieces perfectly aligned. This
            setup allows you to adjust the width of the opening between the two panels which is very helpful if you using larger bits.
          </p>
          <p>
            While I haven't yet replaced either of the MDF boards that serve as the surface of the fence, I think it is important to note that these
            should be thought of as sacrificial. Replacing one or both pieces would be extremely easy and that knowledge allows you to place the fence
            where you need it without worrying about damage you might cause.
          </p>
          <p>
            The fence is entirely operated using finger knobs. There is never any reason to pull hex key out just to make a minor adjustment. It's
            also notable that the fence does span the entire width of the table which allows for maximum stability of the workpiece as your running it
            across a bit.
          </p>
          <p>
            Finally, in the photos, you'll notice a t-track on the top of the fence and it allows you to place two feather boards, which are included
            with the table, where ever you need them to hold the workpiece securely against the table.
          </p>
          <h3>Included Accessories</h3>
          <p>As discussed in the previous section the Bosch RA1171 does come with some hand accessories.</p>
          <ul>
            <li>
              <strong>Two Feather Boards</strong> - These feather boards are specifically designed for the RA1171 router table. They can be mounted on
              both the fence and the surface of the table.
            </li>
            <li>
              <strong>Clear Plastic Bit Guard</strong>- The bit guard serves two purposes: 1. keeps your fingers away from the bit and 2. it prevents
              wood from flying up in your face (which is a real issue). It accomplishes both of these tasks very well.
            </li>
            <li>
              <strong>3 Variously Sized Insert Rings</strong> - The table comes with 3 insert rings that ensure you can support the workpiece as close
              to the bit as possible.
            </li>
            <li>
              <strong>Necessary Tools to Construct</strong> - You'll only need 2 hex keys to construct the router table, but rest assured they come in
              the box.
            </li>
          </ul>
          <h4>Compatible Router Motors</h4>
          <p>
            The RA1171 features broad compatibility with nearly all of the most popular router motors. For convience, I've included that list below:
          </p>
          <ul>
            <li>
              <strong>Bosch</strong>: 1617 series (fixed base only), 1613, 1619, MR Series
            </li>
            <li>
              <strong>Craftsman</strong>: 17508, 17542, 26520, 17533, 17528, 17511, 26834, 28190, 17541, 2767, 2768, 27680 (fixed base only)
            </li>
            <li>
              <strong>Dewalt</strong>: DW616, DW618 (fixed base only)
            </li>
            <li>
              <strong>Hitachi</strong>: M12VC
            </li>
            <li>
              <strong>Makita</strong>: RF1100, RF1101
            </li>
            <li>
              <strong>Milwaukee</strong>: 5615, 5616
            </li>
            <li>
              <strong>Porter-Cable</strong>: 690 series, 7529 plunge router, 892 - 895 series (fixed base only)
            </li>
            <li>
              <strong>Ryobi</strong>: R161, R162, R163, RE170, RE180 PL
            </li>
            <li>
              <strong>Skil</strong>: 1810, 1815, 1820, 1825, 1817, 1830 (fixed base only)
            </li>
          </ul>
          <h2>Comparison To the "Other" Bosch Router Table</h2>
          <p>
            There are a number of competing router tables out there and I've actually written the most popular ones up in my post on the{" "}
            <Link href="https://www.timberandtools.com/router-table-reviews/">
              <a>Top Router Tables Available in 2020</a>
            </Link>
            , however, most of you will probably be thinking: "Well what's the difference between the Bosch RA1171 vs Bosch RA1181?"
          </p>
          <p>The RA1181 has a couple of important differences:</p>
          <p>
            The surface of the RA1181 is essentially the same size (the surface is a bit bigger 27 inches vs 25 inches for the RA1171). However, the
            RA1181 is a fair bit lighter than the RA1171 at ~30lbs vs ~42lbs for the RA1171. This difference in weight can be an advantage if you need
            portability, however, it can also be a disadvantage if you're looking for stability.
          </p>
          <p>
            The router table surface on the RA1181 is entirely cast aluminum. This is definitely the major advantage of the RA1181 over the RA1171,
            which has an MDF + cast aluminum surface. However, given the quality of the MDF surface on the RA1171 and the fact that the router plate
            is cast aluminum, this difference wasn't enough to sway my decision and I don't think it should be enough to change yours.
          </p>
          <p>
            For me, the most important difference between the two router tables is the fact that the RA1171 has an enclosed cabinet and the RA1181
            does not. This was the deciding factor. It's hard to underestimate how much material a router throws off. Having a cabinet there to catch
            the stuff that doesn't make it in the vac is a huge plus. I can honestly say that my shop is meaningfully cleaner because I chose the
            Bosch RA1171.
          </p>
          <h2>Who Will be Disappointed with the Bosch RA1171</h2>
          <p>
            As I discussed in the 2nd paragraph of this post, this table won't be for everyone. This is primarily a result of the fact that the work
            surface is only about 3 square feet in area. While you can (and I definitely have) work with larger pieces on this router table, it takes
            some effort to do so accurately. Ideally, we'd all like to have a 4'x8' table that is devoted entirely to routing. However, shop space and
            money forbid it for all but dedicated professionals.
          </p>
          <p>
            If you are looking for a router table with a larger work surface, the{" "}
            <InContentProductLink href="http://amzn.to/2piETKc" text="Kreg PRS1045" /> is a wonderful option that frequently jumps to the top of the
            conversation. The trade-off is that the Kreg table costs ~2.5x what the Bosch RA1171 does. For my limited budget, I'd rather save some $'s
            on the Bosch and buy myself another tool.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Bosch-Router-Table.jpg"
            alt="Bosch Router Table"
            title="Bosch Router Table"
          />

          <BuyButton productLink="https://amzn.to/2x95GhA" />

          <h2>Video Walkthrough of RA1171 Setup</h2>
          <p>
            As promised at the beginning of the post, I've included a video walk-though of me setting up the RA1171. In total it took me about 30
            minutes.
          </p>

          <YoutubeVideo videoId="GvPt_jYfFZE" />
        </div>
      </article>
    </>
  );
}
