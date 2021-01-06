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
          <p>
            In other posts, I’ve spent some time looking at table saws for folks on a budget such as in my{" "}
            <Link href="/table-saw-buying-guide">Table Saw Buying Guide</Link>. But in this post, I want to focus on what I think is a special price
            category - table saws that cost less than $500.
          </p>
          <p>
            The table saw is usually one of the most expensive tools in a woodworker’s shop and while you can spend thousands on a professional grade
            cabinet table saw, most hobbyists simply can’t swing that level of expense on a single tool.
          </p>
          <p>
            I do, however, hear over and over how people have budgeted $500 for this shop centerpiece and today I want to look at what that level
            expenditure can get you.
          </p>
          <h3>Table Saw Features You will Want</h3>
          <p>
            When you’re looking to buy a table saw there are some features that are especially important to look for since you can’t modify your
            workflow to make up for the fact that they are missing later on.
          </p>
          <h4>Arbor Length</h4>
          <p>
            The arbor is the screw to which you attach your table saw blade. If your relatively new to the hobby you might think that length isn’t
            really an issue. However, as you become more advanced the ability to attach a dado stack to your table saw becomes a huge convenience that
            you will regret not having if you failed to buy a saw that can support the thicker than normal blades.
          </p>
          <p>
            At full width, a dado stack requires approximately 13/16 of an inch plus some room for the arbor nut, so you will want to make sure that
            the table saw arbor is at least 1 ⅛ inches long.
          </p>
          <h4>Motor Size</h4>
          <p>
            With a budget of less than $500, we’re going to be looking at hobbyist table saws. Which means smaller motors compared to what the pros
            are using. It also means that we will be looking at saws with a horsepower rating in the 1.0 - 3.0 range. While some might call these
            motors underpowered, I have been using a Bosch 4100 for years, with a 2.4 hp motor and have never had any issues that couldn’t be solved
            by simply feeding material through it more slowly.
          </p>
          <p>
            That being said, look for saws with at least a 2.0 hp motor. Once you start cutting hardwood or running dado cuts over the blade, you will
            regret buying a less powerful motor if you don’t. With a budget of $500, this shouldn’t be an issue.
          </p>
          <h4>Blade Size</h4>
          <p>
            Table saws in this price range come in two distinct flavors: those with an 8 ¼ inch blade and those with a 10-inch blade. The size of
            material you can cut is largely determined by the blade size. 10-inch blades can cut material that is about 3.5 inches thick, while 8 ¼
            blades can only handle material that is ~2 ¼ inches thick. Trust me that is a big difference.
          </p>
          <p>
            This becomes even more important if you want to use a table saw sled - which you eventually will. As the thickness of the sled cuts down
            on the maximum depth of cuts even more. Do yourself a favor and only look at saws with a 10-inch blade.
          </p>
          <h3>Table Features You Need to Decide On</h3>
          <p>
            Now that you have an idea of what the must-have features are, you can start paying attention to the less important features that will
            determine which saw makes sense for you.
          </p>
          <h4>Do You Need a Stand</h4>
          <p>
            One of the most important decisions will be whether you need a table saw stand. Stands are expensive often accounting for 20-30% of the
            price of a table saw, but if you need to frequently store and re-setup your saw it’s almost a must-have.
          </p>
          <p>
            Certain stands out there are better than others and if this is an important feature to you, make sure you get to know that stand as well
            as the saw.
          </p>
          <h4>Fence Quality</h4>
          <p>
            Table saws are for making straight cuts. Therefore, when you’re using a table saw you are either going to using a fence or a sled. If a
            fence is going to be your primary mechanism for aligning your cuts and you don’t plan/want to set up your own fencing system. Then make
            sure you buy a saw with a good fence that is stable and can be accurately set.
          </p>
          <p>
            One of the best ways that I have found for figuring this out is to simply search for “fence” in the amazon review search tool. Everyone
            who owns a given saw will comment on the fence and tell you what you need to know.
          </p>
          <h4>Work Surface</h4>
          <p>
            When you’re looking at budget saws, you will see a fairly large difference in the overall worksurface area from model to model. The Bosch
            4100 has a surface area of ~32 inches by 27 inches, about 6 square feet, while the Tacklife’s saw only offers ~4.5 square feet of surface.
          </p>
          <p>
            This may seem like a small detail but it can become very frustrating working on a saw when you have to think about feeding material and
            manually balancing that material at the same time.
          </p>
          <h3>The Best of Both Worlds </h3>
          <p>
            While it’s probably clear that trade-offs will need to be made when you making your decision, there is a way to get a great cutting
            experience while still sticking to your budget.
          </p>
          <p>Build a custom table saw enclosure with a custom fence. Check out the video below.</p>
          <YoutubeVideo videoId="ELLx5u8p5Qo" />
          <p>
            By building your own enclosure you don’t have to worry about adding on the expense of a stand, a fancy fence, and a larger work surface.
            You can simply build those yourself. It will take some time and you’ll have to buy the lumber, but you’ll end up with a cutting experience
            that rivals that of a much more expensive cabinet saw, while sticking to your $500 budget.
          </p>
          <p>
            The only scenario where this doesn’t make sense is if you are limited in the space you have available in your shop and you need a table
            saw that you can easily store. In this case, you will need to buy one with a collapsable stand, and considerations around the fencing
            system and worksurface area come back into play.
          </p>
          <h3>The Table Saw I Recommend for Less than $500</h3>
          <p>
            Assuming you fit into the camp where you can build a custom enclosure for your table I recommend buying the{" "}
            <InContentProductLink text="Delta 36-6013" href="https://amzn.to/35bOQAx" />.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609775962/TimberTools/Delta_36-6013.jpg"
            alt="Delta 36-6013"
            title="Delta 36-6013"
          />
          <BuyButton productLink="https://amzn.to/35bOQAx" />
          <p>This saw meets all of the primary requirements:</p>
          <ul>
            <li>Arbor allows the use of a dado stack</li>

            <li>~2 hp motor will ensure you can efficiently cut thick/dense stock</li>

            <li>10-inch blade will provide you with plenty of cutting capacity even if you decide to use a table saw sled.</li>
          </ul>
          <p>The other requirements can be addressed when you build your enclosure.</p>
          <p>
            The saw typically sells for around $300 which will give you plenty of budget left over to buy the materials to build a custom enclosure.
          </p>
          <p>
            If you don’t have the space or the time to build a custom enclosure and you need a saw with a stand, then your options are limited if you
            must stick to a $500 budget. One of the few options available is the{" "}
            <InContentProductLink text="Evolution - RAGE5" href="https://amzn.to/2Lo6lqe" />. The Evolution product typically sells for around $400
            with a stand and it does meet all of the criteria that we discussed above. It’s hard for me to recommend the saw as reviews for the
            product have been mixed and it’s very clear that customer service is hard to come by.
          </p>
          <p>
            If you are in a situation where you want to buy a great table saw with a stand then I’d suggest stretching your budget just a bit to buy
            the Bosch 4100. The saw frequently sells for less than $600 on amazon and if you are flexible on time it has been known to sell for less
            than $500 on occasion. I own the saw and I love it. I’ve done a full writeup on the saw here.
          </p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609778546/TimberTools/bosch-4100xc.jpg"
            alt="Bosch 4100"
            title="Bosch 4100"
          />
          <BuyButton productLink="https://amzn.to/3ohCEWs" />
        </div>
      </article>
    </>
  );
}
