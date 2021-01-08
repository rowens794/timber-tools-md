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

          <p>To be as helpful as possible I'm going to break this post down into 3 sections:</p>
          <ol>
            <li>Gear for Beginners</li>
            <li>Major Tool Purchases</li>
            <li>​Equipment for the Avid Woodworker</li>
          </ol>
          <h2>​Gift Ideas for Beginning Woodworkers</h2>
          <p>
            Is the woodworker you have in mind relatively new to the hobby? These are the easiest folks to shop for because they are so thinly
            equipped. Even you have very little knowledge of their shop, you have a good chance of buying something they don't already have.
          </p>
          <p>
            Because this is a gift, try to avoid buying tools on the low end of the quality spectrum. Nothing says "I cheaped out on you this year​"
            like gifting a tool that has a reputation of breaking after 5 uses.
          </p>
          <p>Avoid consumer brands like Black and Decker, Drill Master, Chicago Electric, Ryobi, Kobalt, Bluehawk, HDX, and Husky.</p>
          <p>If you can, try to target brands with an excellent reputation like Bosch, Dewalt, and Makita.​</p>
          <h2>Gear for Beginners</h2>
          <h3>Gifts for about $50​</h3>
          <p>High-Quality Chisel Set | Cost: ~$50</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Chisels.jpg"
            alt="Chisels"
            title="Chisels"
          />
          <p>
            New woodworkers often can't make room in the budget to buy a quality set of chisels. You just don't need them on every project. But when
            you do need them, there are very few alternatives to get the job done.
          </p>
          <p>
            This set of Irwin Marples is a respected set that comes with a great box for gifting. You can pick them up at Amazon and have them
            delivered in 2 days with Prime.
          </p>
          <BuyButton productLink="https://amzn.to/2r09W1z" />

          <p>Japanese Hand Saw | Cost: ~$40</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Handsaw.jpg"
            alt="Handsaw"
            title="Handsaw"
          />
          <p>
            These handsaws are primarily used to cut dovetail joints, which is probably above the skill-set of your new woodworker. However, these
            saws are equally good at finishing off a cut that requires a bit of precision. And who knows - maybe this will be the gift that inspires a
            foray into dovetail joinery?
          </p>
          <p>This saw is produced by Gyokucho and is one of the highest-rated saws of this type on Amazon.</p>
          <BuyButton productLink="https://amzn.to/2qZcawo" />

          <p>Pocket Hole Jig System | Cost: ~$40</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Kreg-R3-Jig.jpg"
            alt="Kreg-R3-Jig"
            title="Kreg-R3-Jig"
          />
          <p>
            When your woodworker needs a quick and clean way to join two pieces of wood together, a pocket hole is often the right approach. Kreg's R3
            Pocket hole system is a simple solution to what can otherwise be a complicated problem for new woodworkers.
          </p>
          <p>Kreg is a powerful brand in the woodworking space that is synonymous with high quality and innovative tools.</p>
          <BuyButton productLink="https://amzn.to/2rXWeKW" />

          <h3>Gifts for about $100</h3>
          <p>Extra Safe Push Tools | Cost: ~$100</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Gripper.jpg"
            alt="Gripper"
            title="Gripper"
          />
          <p>
            Safety equipment can seem kind of boring. But these push blocks from Micro Jig are an ingenious solution to a scary problem - having your
            hands close to a blade spinning at 3500 rpm. Owners of the Gripper rave about the stability and control over the material they have with
            these blocks.
          </p>
          <p>The link below is for a set of two of these blocks. The set usually sells for ~$100.</p>
          <BuyButton productLink="https://amzn.to/2roaiA0" />

          <p>Advanced Pocket Hole System | Cost: ~$100</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Kreg-k4.jpg"
            alt="Kreg-k4"
            title="Kreg-k4"
          />
          <p>
            If you want to take a step up from the R3 system (above) take a look at Kreg's K4 Jig. It provides the exact same functionality as the
            cheaper model but includes a clamping structure that further cuts down on the time to drill perfect &#x26; consistent pocket holes.
          </p>
          <p>I've been using this system for years and couldn't be happier with it.</p>
          <BuyButton productLink="https://amzn.to/2r7m80s" />

          <p>Improved Dust Collection | Cost: ~$100</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Dust-Deputy.jpg"
            alt="Dust-Deputy"
            title="Dust-Deputy"
          />
          <p>
            Anyone who has struggled to try to keep their workspace clean knows just how hard it can be with a shop vac setup. The dust deputy
            separates sawdust before it enters a shop vac preventing clogging and allowing for easier dust disposal.
          </p>
          <p>This system comes with both a separator and a rolling collector for easy maneuverability. Note that you don't get the shop vac :).</p>
          <BuyButton productLink="https://amzn.to/2rXMtfp" />

          <h3>Major Tools - Showing Some Major Love</h3>
          <p>
            If your plan is to go big and help a loved one make a major addition to their shop, this is the section for you. I would recommend that
            you check out our post on{" "}
            <Link href="/essential-woodworking-tools">
              <a>Setting Up a Shop for Any Budget</a>
            </Link>{" "}
            - It will help give you some ideas of what tools are especially important to have in the shop at the beginning stages of this hobby.
          </p>
          <p>
            Before you make a major purchase for someone make sure you have at least some idea of what their equipment setup is - a table saw is a
            great gift, but not if the recipient has to figure out where to store their other one.​
          </p>
          <p>
            In the section below I'm going to highlight primary tools that those new to the hobby are unlikely to have or are probably looking to
            upgrade.
          </p>
          <h2>Major Tool Purchases</h2>
          <p>Router with some Power | Cost: ~$200</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Bosch-1617.jpg"
            alt="Bosch-1617"
            title="Bosch-1617"
          />
          <p>
            Bosch's 1617 has become one of the staples that you see in nearly every shop you step into. This tool makes it easy to apply decorative
            edges, extract material, or assemble raised panel doors. If your woodworker doesn't already have a router in their shop, this should be a
            strong consideration.
          </p>
          <p>
            If you do go this route (pun intended) also consider a router table to mount the router in. We wrote up an{" "}
            <Link href="https://www.timberandtools.com/router-table-reviews">
              <a>article about our favorites</a>
            </Link>{" "}
            a while back.
          </p>
          <BuyButton productLink="https://amzn.to/2qmSz87" />

          <p>Miter Saw | Cost: ~$350</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Dewalt-Miter-Saw.jpg"
            alt="Dewalt-Miter-Saw"
            title="Dewalt-Miter-Saw"
          />
          <p>
            A miter saw is one of those tools that a lot of folks are likely to have. But keep in mind two things: 1. If they don't have one then this
            would be a spectacular gift, your woodworker is probably daydreaming about one right now; 2. If they went cheap just to get something that
            could make a cut, an upgrade will be welcome.
          </p>
          <p>I've been using this Dewalt saw for years and love it. Great power, great quality, great brand. Hard to go wrong.</p>
          <BuyButton productLink="https://amzn.to/2qnX8Ps" />

          <p>Cordless Drill/Driver Set | Cost: ~$200</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Bosch-Drill-Set.jpg"
            alt="Bosch-Drill-Set"
            title="Bosch-Drill-Set"
          />
          <p>
            When your working on a project that isn't close to an outlet, or even when you are, dealing with cords is a pain. The ability to drill a
            hole and set a screw without having to change bits or unplug a cord can turn an otherwise tedious job into a joy.
          </p>
          <p>This drill driver set from Bosch comes with two tools, two batteries, a charger, and a carrying case.</p>
          <BuyButton productLink="https://amzn.to/2qo0XUN" />

          <p>Dewalt Planer | Cost: ~$400</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Dewalt-Planer.jpg"
            alt="Dewalt-Planer"
            title="Dewalt-Planer"
          />
          <p>
            The ability to adjust the thickness of the material is something that many folks put off because of the price tag. With a little
            ingenuity, this planer not only allows for thickness adjustment but can also{" "}
            <a href="http://www.woodworkweb.com/woodworking-videos/551-how-to-joint-wood-with-your-planer.html">plane warped wood</a>.
          </p>
          <p>If the woodworker your thinking of doesn't have one - they'd sure love to.</p>
          <BuyButton productLink="https://amzn.to/2qXoDlu" />

          <h3>The Avid Woodworker - Shopping for the Veteran</h3>
          <p>
            If your target woodworker has been at this for more than a decade, coming up with ideas is much tougher. They've likely seen and/or used
            just about every tool and accessory on the market. In this special case, don't necessarily focus on adding something new to their shop,
            instead look for something that can expand the functionality of the equipment they already have in new and interesting ways.
          </p>
          <p>
            A focus on buying quality becomes much more important in this scenario. This group is going to recognize poorly constructed equipment and
            nothing will land your heart-felt gift in the junk drawer faster than a gift that doesn't live up to the veteran's standards.
          </p>
          <h2>Gifts for the Avid Woodworker</h2>
          <p>Box Joint Jig | Cost: ~$160</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Incra-I-Box.jpg"
            alt="Incra-I-Box"
            title="Incra-I-Box"
          />
          <p>
            Box joints are one of the most versatile and beautiful joinery techniques around. Adding a tool that simplifies the manufacturing of the
            necessary cuts would be a welcome addition for even the most advanced woodworkers.
          </p>
          <p>
            Incra makes an accessory (jig) that attaches to a table saw that allows your favorite woodworker to turn out these joints by the truckload
            quickly and easily.
          </p>
          <BuyButton productLink="https://amzn.to/2r6T89d" />

          <p>Doweling Jig | Cost: ~$250</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Dowelmax.jpg"
            alt="Dowelmax"
            title="Dowelmax"
          />
          <p>
            The Dowelmax is a high-quality piece of equipment that solves a singular problem - consistently placing solid dowels. The jig is solid
            machined aluminum and has the heft to go along with it.
          </p>
          <p>
            Dowelmax is a tool that's been around for years. Everyone's heard of it, everyone wants one, but the steep price tag prevents most from
            making the leap.
          </p>
          <BuyButton productLink="https://amzn.to/2qnX8Ps" />

          <p>Table Saw Miter Gauge | Cost: ~$200</p>
          <ProductImage
            src="https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_500/v1609522288/TimberTools/Incra-Miter-Guage.jpg"
            alt="Incra-Miter-Guage"
            title="Incra-Miter-Guage"
          />
          <p>
            All table saws come with a miter gauge. But none of them are as amazing to use as INCRA's Miter 1000. This gauge is so good, it
            effectively replaces a heavy table saw sleds in most cases. While your favorite woodworker most likely got through life without the
            Cadillac of miter gauges, once they try it they won't willingly go back.
          </p>
          <BuyButton productLink="https://amzn.to/2qoRUTD" />
        </div>
      </article>
    </>
  );
}
