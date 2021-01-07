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

          <p>
            Looking back, I'm not too proud to say I got played hard. My wife not only got the chairs she really wanted, but she got them the very
            next afternoon. At the very least, I can swallow what's left of my pride and show you how I did it.
          </p>
          <h3>Honey! Our Adirondack Chair Plans are Missing!​</h3>
          <p>
            Well, that's not entirely the case. In fact, I didn't have any plans laying around at all. ​But, a couple of years earlier I had watched a
            video where Norm built a chair that I'd been infatuated with ever since - it's a three-part series on youtube, I highly recommend it
            (video 1 below)
          </p>

          <YoutubeVideo videoId="OH-gtLBkCKE" />

          <p>I had a rough idea of what I wanted from my memory of the video:</p>
          <ul>
            <li>I wanted to use wood that weather well without having to finish or maintain</li>
            <li>I wanted something that I could build 2 of in an afternoon - so nothing overly complicated</li>
            <li>I wanted something sturdy so that it would hold up to inevitable tips from a climbing 3-year-old</li>
            <li>I needed something I could buy all of the parts for at Lowes - I'm on a limited timeline in a remote area</li>
          </ul>
          <p>
            ​My constraints were easy to overcome. I chose to use cedar, I could pick it up at Lowes and I was confident that it would hold up to the
            weather well. The joinery was simple:{" "}
            <InContentProductLink href="https://amzn.to/2putom2" text="Stainless Steel Kreg Pocket Hole Screws" />. I decided to use these because the
            stainless steel would hold up against the elements AND I had 500 of them on hand. I didn't want to use screws in the top of the armrests,
            so I chose to use a 3/8th's inch dowel sanded flush to the cedar. In total, materials cost around $170.
          </p>
          <p>
            While I could have built the chairs based off the idea in my head, I didn't want to have to guess at heights and angles. I decided to base
            my design off of these <a href="http://pop.h-cdn.co/assets/cm/15/06/54d112e5a5fd4_-_PMX0706Adiron.pdf">Popular Mechanic's designs</a>.
          </p>
          <h3>Tools Needed for the Build</h3>
          <p>
            You don't need a ton of tools to complete this project, a screwdriver and a handsaw would do it for you - although I don't think you'd
            finish in an afternoon. Here's what I used:
          </p>
          <ul>
            <li>Table saw</li>
            <li>Miter saw</li>
            <li>Power Drill</li>
            <li>Random Orbital Sander</li>
            <li>Band Saw</li>
          </ul>
          <p>
            I've talked about{" "}
            <Link href="/essential-woodworking-tools">
              <a>outfitting your shop</a>
            </Link>{" "}
            in other posts, but basic tools will do everything you need in this project. The one piece of equipment that some of the newest folks to
            the hobby might not have yet is a band saw. It was essential for getting this project done as quickly as I did. A cheaper alternative is a
            jigsaw. Your cuts won't be as clean with a jigsaw, but the wood will still come out in the shape you need.
          </p>
          <h2>The Build </h2>
          <h3>Step 1 - Cutting the Side Rails</h3>
          <p>
            ​I wanted to jump right in with the toughest piece first. The pdf of the plans does a great job of outlining the dimensions of this
            complicated cut. I sketched out an outline on a 1"x8" that I cut to size (see below) and got to work on the band saw. Once the first board
            was cut, I traced the pattern onto the remaining boards. Everything lined up nicely right from the start, but I did clamp everything
            together and use 40 grit sandpaper to make sure everything was perfectly aligned.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/IMG_3102.jpg"
            alt="Building Adirondack Chairs"
            title="Building Adirondack Chairs"
          />
          <h3>Step 2 - Cutting the Back Rails</h3>
          <p>
            ​With the toughest cut out of the way I wanted to finish up, the band saw work. Next on the list were the top and bottom back rails. These
            consisted of a big sweeping curve - which I drew by hand. Getting a consistent curve was the toughest part. My approach; mark the center
            at the correct depth and plot points halving each line segment. Instead of drawing one long curve (which would have been impossible), I
            drew 8 small curves that were doable. In the picture below you can see my curve was pretty thick, I cut on the outside edge of the curve I
            drew.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522311/TimberTools/IMG_3105.jpg"
            alt="Building Adirondack Chairs"
            title="Building Adirondack Chairs"
          />
          <h3>Step 3 - Cutting the Arms and Supports</h3>
          <p>
            The plans do a great job of laying the dimensions of both the armrest and the supports. They are both easy cuts on a band saw. Because
            speed was a high priority for this build and because these are going to be outdoor furniture, I didn't dedicate a lot of time to sanding.
            The armrests are the one exception. The reason should be clear - it's hard to relax when your arms are peppered with splinters.
          </p>
          <p>
            The third picture below shows the support affixed to the front leg​. The plan failed big time here - it made no mention of what length the
            front leg should be. I spent waaay too long trying to balance the side rail so I could make a determination of where the armrest would lie
            in relation to the seat. THE ANSWER - The front leg should be 21 inches long. As frustrating as not knowing what the length of the front
            leg should be, it was super agitating to have to go through the entire exercise again with the back riser.{" "}
            <strong>SPOILER - The back riser should be 27" to the top of the angle.</strong>
          </p>
          <p>
            The plans were also lacking in explaining the width of the seat planks. I opted for 1 3/4" so I could get two sets out of each 1"x4" board
            that I had.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522311/TimberTools/IMG_3108.jpg"
            alt="Building Adirondack Chairs"
            title="Building Adirondack Chairs"
          />
          <h3>Step 4 - Assembly Round 1</h3>
          <p>
            Making cut after cut gets a bit tedious. The most exciting part of every project is the assembly. Seeing a project come together is what
            makes this hobby fun. You'll notice in the pictures below that the joinery is pretty simple; I'm using screws across the board (pun
            intended). I did have enough forethought to think to use stainless steel screws to prevent rust as the weather.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522311/TimberTools/IMG_3111.jpg"
            alt="Building Adirondack Chairs"
            title="Building Adirondack Chairs"
          />
          <h3>Step 5 - Assembly Round 2</h3>
          <p>
            As I mentioned above figuring out the height of the back riser did take some thought. While I'm sure there's a more exact way to determine
            what the height of the riser should have been, my strategy consisted of guess and check until I could get a board to lay flush on both the
            top and bottom back rails.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522311/TimberTools/IMG_3117.jpg"
            alt="Building Adirondack Chairs"
            title="Building Adirondack Chairs"
          />
          <h3>Step 6 - Cutting Back Panels and Final Assembly</h3>
          <p>
            At this point, I have something that looks a lot like a chair. I have one final decision to make and that is how I want to shape the chair
            back. I have never been a fan of the classic Adirondack arch and I knew going into this that I wanted a square profile. At the same time,
            I didn't want to lose the ability to lay my head back in the chair.
          </p>
          <p>
            After testing a few potential heights with some scraps, I opted for a 5 board back where each board was cut to 31 3/4". This height
            allowed for adequate space to lay my head back and saved on the material. I could get exactly 3 slats from each of the 8' boards I had
            available.
          </p>
          <p>
            With the back slats cut, the final step was screwing each of the 5 boards on to the back rails and attaching the final seat plank (I left
            one plank off so that I'd have room to screw in the bottom of the back slats). Thanks to my choice of cedar, additional time for finish
            isn't necessary.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Adirondack-Chair-Build-e1536634088898.jpg"
            alt="Building Adirondack Chairs"
            title="Building Adirondack Chairs"
          />
          <h2>Wrap Up </h2>
          <p>
            This was a fun build. Cedar is easy to work with, there was no time-consuming joinery necessary, and the lack of finish meant my wife
            could enjoy our new chairs as soon as the last screw was in. In total, the project took about 8 hours. But honestly, I could have finished
            it in less. Mulling over the height of the front legs and general fatherhood ate up some clock.
          </p>
          <p>
            This is a great project for those that are new to woodworking because the materials are inexpensive and forgiving. ​If you are brand new
            to woodworking and wondering what tools you need to complete a project like this, everything you need can be had in the $500 shop we
            talked about in the{" "}
            <strong>
              <Link href="/essential-woodworking-tools">
                <a>post about putting a shop together</a>
              </Link>
            </strong>
            . Good luck.
          </p>
        </div>
      </article>
    </>
  );
}
