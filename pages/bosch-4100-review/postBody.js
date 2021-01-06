import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import styles from "../postStyles.module.css";
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
          <h3>Table Saw Purchase Constraints</h3>
          <p>
            When I first started out I was living in a 1500 sq. ft. townhouse that had a 1 car garage that served as both my wife's parking spot and
            my workshop. A table saw is a big tool no matter how you slice it. If I was going to get one and remain married I needed to find a saw
            that could share space with my wife's car.
          </p>
          <p>
            On top of that, I wanted a tool that was reasonably high quality. I didn't want to regret my purchase or feel compelled to upgrade a year
            down the line. I wanted a solid motor, a large work surface, a high-quality fence, and the ability to use a dado stack.
          </p>
          <p>The budget wasn't a huge issue for me but I wanted to keep the purchase around $500.</p>
          <h3>My Must Have's​</h3>
          <ul>
            <li>Great Portability</li>
            <li>Solid Build Quality</li>
            <li>Priced Around $500</li>
          </ul>
          <h3>Bosch 4100 Features</h3>
          <h3>Table Top</h3>
          <p>
            The tabletop is 29" x 21.5" and it expands to 40.5" x 21.5". I don't cut a lot of plywood, but I have cut it on occasion and this table
            can very adequately handle a 4' x 8' sheet.
          </p>
          <p>
            The top is made from aluminum, and while many might see this as a point against it, a cast iron top would have severely reduced the
            portability of the saw. I've owned the saw for nearly 5 years and I have never had a situation where I felt like the saw was unstable.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522269/TimberTools/IMG_0117.jpg"
            alt="Bosch 4100 T-tracks"
            title="Bosch 4100 T-tracks"
          />
          <p>
            The top has two standard t-tracks, which are an absolute must for a table saw. 90% of the time I am using my saw I am using some sort of
            sled/jig. You need them, the fact that they are standard size is great, it allows you to purchase after-market sleds or t-tracks if you
            decide to go the after-market route.
          </p>
          <h3>Motor​</h3>
          <p>
            I needed a portable saw and one thing I was worried about was getting something that was underpowered. I fully intended to not only be
            working with hardwood but to be cutting ¾" dados into the hardwood. I wanted something that didn't feel like it was constantly bogging
            down whenever I threw something dense its way.
          </p>
          <p>
            The 4100's 4hp 15 amp motor has stood up to everything I've thrown at it exceptionally well. Over the nearly 5 years that I've owned it, I
            have never had the motor stall or even hiccup. It handles everything from hardwood to thick dados easily.
          </p>
          <h3>Gravity Rise Stand</h3>
          <p>
            Bosch's Gravity-Rise Stand is absolutely amazing. Portability was a big deal for me and this stand by itself played a big part in me
            deciding to go with this saw. This saw is the heaviest most awkward piece of equipment that I own. Yet, I can maneuver it around my small
            shop as easily as any tool I own because of the marvel that is the Gravity-Rise Stand.
          </p>
          <p>
            Within 3 seconds I can take the Bosch 4100 from stored to sawing. I'll post a video right below this so that you can see how the stand
            works - but it basically involves a foot on the crossbar, a hand on the handle, and the twist of a lever, and the saw goes from 90 degrees
            to flat.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522269/TimberTools/Bosch-4100-Stand.jpg"
            alt="Bosch 4100"
            title="Bosch 4100"
          />
          <h3>Fence System</h3>
          <p>
            After reading a number of reviews online I didn't have especially high hopes for the fence on this saw. Once I got the saw up and running,
            negative comments about the fence are misguided in my opinion. The one negative that is legit is that the fence is aluminum and not steel,
            if that is a big deal to you then take note. It wasn't for me.
          </p>
          <p>
            Overall, there have been very few times where I experienced any disappointment with the fence system at all. It slides on the rails
            easily, it locks very securely, and (if you take the time to adjust the fence) it locks squarely to the blade.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522269/TimberTools/4100-Fence.jpg"
            alt="Bosch 4100 Fence"
            title="Bosch 4100 Fence"
          />
          <p>
            I think it's also important to note that the fence is square bodied, so you can easily clamp a sacrificial fence to it if needed.
            Additionally, the saw does have a rule running along the front face and the fence has a register that allows you to make measurements
            directly from the front of the fence. This is nice and convenient, but I usually use something a bit more exact if I'm making a cut that
            requires accuracy.
          </p>
          <h3>Safety Features</h3>
          <p>
            I am ashamed to say that I have not always been as diligent about safety as I should be. A few years ago, I had a chisel incident that
            involved an ER visit and the permanent loss of feeling in one of my fingers. ​As I look back, I am actually glad that I had a scary
            experience that woke me up to how quickly things can go south if your not constantly thinking about what can go wrong.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522269/TimberTools/Safety-Features-Bosch-4100.jpg"
            alt="Bosch 4100 Safety Features"
            title="Bosch 4100 Safety Features"
          />
          <p>This saw comes with a host of features that help to make sure it's being used as safely as possible​.</p>
          <ul>
            <li>
              ​<a href="https://www.rockler.com/how-to/riving-blade-important-shop-safety/">Riving Knife</a> - the Bosch 4100 comes with a riving
              knife that sits directly behind the blade. The knife is completely adjustable and can be raised or lowered below the work surface
              without even pulling out a tool. This feature is primarily used to prevent the stock from pinching the blade to the point where the
              kickback could occur.
            </li>
            <li>
              <a href="http://www.popularwoodworking.com/woodworking-blogs/chris-schwarz-blog/table-saw-guards-pass-and-fail">Blade Guard</a> - Like
              the riving knife no tools are needed to attach and detach the blade guard. This bulky contraption covers the blade so that if you do get
              into a kickback situation and your hands are heading towards the blade, there will be some plastic there to prevent contact with it.
            </li>
            <li>
              <a href="https://www.thespruce.com/what-are-anti-kickback-pawls-3536813">Anti-Kickback Pawls</a> - The last feature, that once again
              requires no tools for attachment, is the anti-kickback pawls. These pawls connect behind the blade and have metal serrations that grip a
              workpiece should it start to move quickly in the wrong direction.
            </li>
          </ul>
          <p>
            ​I'm going to stick in a youtube video here that shows how dangerous kickback can be. It's short and I promise that once you check it out
            you will take kickback more seriously than you do now. The features on this saw would completely prevent a situation like thintz12
            experienced. The riving knife would have likely prevented kickback in the first place, but if it did occur the blade guard would have kept
            his hands away from the blade and while he didn't get it with a flying piece of shrapnel, the anti-kickback pawls would have pinned down
            the workpiece so it didn't take off.
          </p>
          <YoutubeVideo videoId="8f8VWwtaudU" />
          <p>
            One final thing I want to mention about these safety accessories is that I don't always have each of them attached as I'm working. They
            are big and in many cases simply not practical. But the fact that they are easily attachable without tools means that I will take the 10
            seconds to put them back on when I need them.
          </p>
          <h2>
            <strong>Bosch 4100 Functionality</strong>
          </h2>
          <h3>Cutting with a Sled</h3>
          <p>
            Most of the cuts I make on the table saw involve the use of a{" "}
            <a href="https://www.familyhandyman.com/tools/table-saws/crosscuts-with-a-table-saw-sled/view-all">sled</a>. Down the road, I'm going to
            do a post on making a table saw sled, but for now, I'd like to provide some insight into how this setup works with the Bosch 4100.
          </p>
          <p>
            The setup that I use involves a sled that straddles the blade and rides in the saws two miter tracks. I built the sled out of 3/4" MDF
            with oak rails. Both of the miter tracks are perfectly square to both each other and the blade and the sled rides very smoothly over the
            work surface.
          </p>
          <p>
            My experience has been that cuts come out very clean from the saw and are ready for glue immediately after a cut. That is even more true
            when using a sled setup. The workpiece has support on the bottom and the back edge - exactly where tear-out would occur if it was going to
            happen.
          </p>
          <h3>Ripping Dimensional Lumber and Sheet Goods</h3>
          <p>
            Dimensional lumber is extremely easy to rip with this saw. I've talked about the safety features above - and they do provide confidence
            that hitting a knot isn't going to put me in an unnecessarily dangerous situation. I have cut all types of wood with this saw and both
            softwoods and hardwoods do just fine.
          </p>
          <p>
            This is ultimately a worksite saw, the work surface is large, but it is not a cabinet saw by any stretch. I can successfully rip 10'
            boards down to size and properly size sheet goods, but I often need support on the back of the saw - either an outfeed table or rollers.
            The issue is worse with large sheet goods, but the saw can handle them safely.
          </p>
          <p>
            As I discussed above, I am pleased with the fence system that comes standard on the saw. It locks into place securely and true to the
            blade. You can misalign it by 1/2 degree or so if you are completely negligent to set up, but if you take just a few seconds longer you'll
            be just as happy ​as I am with it.
          </p>
          <h3>Miter Cuts</h3>
          <p>
            The miter gauge that comes with the saw is weak. I've used it two or three times and was not happy with it any of the times I've used it.
            It doesn't fit snuggly in the miter track and it's a pain to set accurately. My advice would be to not buy this saw or buy an after-market
            miter gauge like the <InContentProductLink href="http://amzn.to/2rgSffp" text="Incra" /> if miter cuts are especially important to you.
            Any time I need to make a miter I use a dedicated miter saw.
          </p>
          <h3>Final Thoughts on the Bosch 4100</h3>
          <p>
            I am a huge fan. The saw not only meets my limited space constraint perfectly (The{" "}
            <a href="https://www.boschtools.com/us/en/boschtools-ocs/table-saw-stands-ts2100-129399-p">Gravity Rise Stand</a> is amazing), but it
            delivers on performance. The saw handles dense material with ease, it accommodates my dado stack with more than adequate power and it has
            safety features in place that allow me to use the tools without constantly worrying about my safety.
          </p>
          <p>
            Shortfalls, while in my opinion limited, do exist for the product, however. It is not a cabinet saw - don't even try to compare them.
            You're not going to get the work surface, stability, or power that you'd get from a cabinet saw. You make that trade-off for portability.
            Additionally, while the accessories that come with the saw are great, the miter gauge is lacking. Don't expect to cut finish grade miters
            with the included gauge.
          </p>
          <p>If you are considering making the purchase ask yourself whether the answer to these two questions is true:</p>
          <ul>
            <li>Do I need to conserve as much space as possible in my workshop?</li>
            <li>Am I willing to spend the extra money necessary to get the best worksite table saw on the market?</li>
          </ul>
          <p>
            ​If you answer both yes, then don't hesitate. <InContentProductLink href="http://amzn.to/2qVfSJj" text="Click this link" /> to head over
            to amazon.com and order the Bosch 4100 now, they'll have it shipped to you in two days. If you buy through my link you'll also buy me a
            cup of coffee (no additional expense to you of course).
          </p>
          <BuyButton productLink="https://amzn.to/2qVfSJj" />
        </div>
      </article>
    </>
  );
}
